import Joi from "joi";
import {
  generateSalt,
  generatePassword,
  validatePassword,
} from "../utils/password.util.js";
import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
import { upload } from "../utils/cloudinay.util.js";
import Referral from "../models/Referral.model.js";
import { sendMail } from "../services/email.js";


export const signup = async (req, res, next) => {
  const validation = Joi.object({
    userName: Joi.string().required(),
    email: Joi.string().email().required(),
    fullName: Joi.string().required(),
    password: Joi.string().required(),
    country: Joi.string(),
    ref: Joi.string().optional()
  }).validate(req.body);

  if (validation.error) {
    return res
      .status(400)
      .json({ message: validation.error.details[0].message });
  }

  try {
    const { userName, email, fullName, password, country, ref } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser !== null) {
      return res
        .status(400)
        .json({ message: "user with this email already exists." });
    }

    let referredBy;

    const referralCode = ref || req.query.ref;

    console.log("refferal code: ", referralCode);

    if (referralCode) {
      const existingRef = await Referral.findOneAndUpdate(
        { referralCode, status: { $ne: "Completed" } }, // Only search for referrals with the provided code and not already completed
        { $set: { status: "Completed" } }, // Update the status to "Completed" atomically
        { new: true } // Return the updated referral object
      ).populate("user"); // Populate the "user" field from the Referral model

      if (!existingRef) {
        return res
          .status(404)
          .json({ message: "Referral not found or already completed" });
      }

      if (!existingRef.user) {
        return res
          .status(404)
          .json({ message: "User with this referral is not found" });
      }

      existingRef.user.rewardEarned += 30;
      await existingRef.user.save();

      referredBy = existingRef.user._id;
    }

    const salt = await generateSalt();
    const hashPassword = await generatePassword(password, salt);

    const user = await User.create({
      userName,
      email,
      fullName,
      password: hashPassword,
      country: country || "", // Set to empty string if not provided
      rewardEarned: 0,
      referredBy: ref || "", // Set to empty string if not provided
      avatar: "",
      payoutMethod: "",
      bankAccountDetails: "",
      bankName: ""
    });

    const token = jwt.sign({ _id: user._id, email }, process.env.JWT_KEY, {
      expiresIn: "30d",
    });

    // await sendMail(user.fullName)

    return res.status(200).json({ user, token, message: "signup successfull" });
  } catch (error) {
    console.log("signup error: ", error);
    return res.status(500).json({ error: error });
  }
};




export const login = async (req, res, next) => {
  const validation = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().email().required(),
  }).validate(req.body);

  if (validation.error) {
    return res
      .status(400)
      .json({ message: validation.error.details[0].message });
  }

  try {
    const { email, password } = req.body;

    // Normalize email to lowercase and trim spaces
    const normalizedEmail = email.trim().toLowerCase();

    console.log('Searching for user with email:', normalizedEmail);
    
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      console.log('User not found for email:', normalizedEmail);
      return res.status(404).json({ message: "User not found." });
    }

    const isPasswordCorrect = validatePassword(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Wrong credentials" });
    }

    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_KEY, {
      expiresIn: "30d",
    });

    console.log('Login successful for user:', user._id);

    return res.status(200).json({ user, token, message: "Login successful" });
  } catch (error) {
    console.log("Login error: ", error);
    return res.status(500).json({ error: error });
  }
};


export const updateUser = async (req, res, next) => {
  const validation = Joi.object({
    email: Joi.string().email().optional(),
    userName: Joi.string().optional(),
    country: Joi.string().optional(),
    currentPassword: Joi.string().optional(),
    newPassword: Joi.string().optional(),
    payoutMethod: Joi.string().optional(),
    bankDetails: Joi.string().optional(),
    bankName: Joi.string().optional(), // Added bankName field
  }).validate(req.body);

  if (validation.error) {
    return res
      .status(400)
      .json({ message: validation.error.details[0].message });
  }

  try {
    const {
      email,
      userName,
      country,
      currentPassword,
      newPassword,
      payoutMethod,
      bankDetails,
      bankName, 
    } = req.body;

    const userId = req.user._id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (email) user.email = email;
    if (userName) user.userName = userName;
    if (country) user.country = country;
    if (payoutMethod) user.payoutMethod = payoutMethod;
    if (bankDetails) user.bankAccountDetails = bankDetails;
    if (bankName) user.bankName = bankName; 

    if (req.file) {
      const avatar = await upload(req.file); 
      user.avatar = avatar;
    }

    if (currentPassword && newPassword) {
      const isPasswordCorrect = validatePassword(currentPassword, user.password);
      if (!isPasswordCorrect)
        return res.status(400).json({ message: "Current password is not correct" });

      const salt = await generateSalt();
      const newPassHash = await generatePassword(newPassword, salt);
      user.password = newPassHash;
    }

    await user.save();
    console.log("user", user);

    return res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.log("Error updating the user: ", error);
    return res.status(500).json({ error });
  }
};


