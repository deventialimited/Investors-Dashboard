import Joi from "joi"
import { generateSalt, generatePassword, validatePassword } from "../utils/password.util.js"
import User from "../models/User.model.js"
import jwt from 'jsonwebtoken'
import { upload } from "../utils/cloudinay.util.js"
import Referral from "../models/Referral.model.js"

export const signup = async (req, res, next) => {
  const validation = Joi.object({
    userName: Joi.string().required(),
    email: Joi.string().email().required(),
    fullName: Joi.string().required(),
    password: Joi.string().required(),
    country: Joi.string()
  }).validate(req.body)

  if (validation.error) {
    return res
      .status(400)
      .json({ message: validation.error.details[0].message })
  }

  try {
    const { userName, email, fullName, password, country } = req.body

    
    const existingUser = await User.findOne({ email })
    if (existingUser !== null) {
      return res
      .status(400)
      .json({ message: "user with this email already exists." })
    }

    let referredBy

    const referralCode = req.query.ref;
    if (referralCode) {
      const existingRef = await Referral.findOneAndUpdate(
        { referralCode, status: { $ne: "Completed" } }, // Only search for referrals with the provided code and not already completed
        { $set: { status: "Completed" } }, // Update the status to "Completed" atomically
        { new: true } // Return the updated referral object
      ).populate("user"); // Populate the "user" field from the Referral model
    
      if (!existingRef) {
        return res.status(404).json({ message: 'Referral not found or already completed' });
      }
    
      if (!existingRef.user) {
        return res.status(404).json({ message: 'User with this referral is not found' });
      }
    
      existingRef.user.rewardEarned += 30;
      await existingRef.user.save();
    
      referredBy = existingRef.user._id;
    }

    const salt = await generateSalt()
    const hashPassword = await generatePassword(password, salt)

    const user = await User.create({
      userName,
      email,
      fullName,
      password: hashPassword,      
      country,
      referredBy
    })

    const token = jwt.sign({ _id: user._id, email }, process.env.JWT_KEY, { expiresIn: '30d' })

    return res.status(200).json({ user, token, message: 'signup successfull' })
  } catch (error) {
    console.log("signup error: ", error)
    return res.status(500).json({ error: error })
  }
}

export const login = async (req, res, next) => {
  const validation = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().email().required(),
  }).validate(req.body)

  if (validation.error) {
    return res
      .status(400)
      .json({ message: validation.error.details[0].message })
  }

  try {
    
    const {email, password} = req.body

    const user = await User.findOne({ email })
    if (user === null) {
      return res.status(404).json({message: "user not found."})
    }

    const isPasswordCorrect = validatePassword(password, user.password)
    if (!isPasswordCorrect) {
      return res.status(400).json({message: 'wrong credentials'})
    }
    const token = jwt.sign({ _id: user._id, email }, process.env.JWT_KEY, { expiresIn: '30d' })

    return res.status(200).json({ user, token, message: 'login successfull' })
  } catch (error) {
    console.log("login error: ", error);
    return res.status(500).json({ error: error })
  }
}

export const updateUser = async (req, res, next) => {

  const validation = Joi.object({
    email: Joi.string().email().optional(),
    userName: Joi.string().optional(),
    country: Joi.string().optional(),
    currentPassword: Joi.string().optional(),
    newPassword: Joi.string().optional(),
    payoutMethod: Joi.string().optional(),
    bankDetails: Joi.string().optional(),
  }).validate(req.body);
  
  if (validation.error) {
    return res.status(400).json({ message: validation.error.details[0].message });
  }

  try {
    const { email, userName, country, currentPassword, newPassword, payoutMethod, bankDetails } = req.body;

    const userId = req.user._id

    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({message: "user not found."})
    }

    if (email) {
      user.email = email
    }

    if (userName) {
      user.userName = userName
    }

    if (country) {
      user.country = country
    }
    
    if (currentPassword && newPassword) {
      const isPasswordCorrect = validatePassword(currentPassword, user.password)
      if (!isPasswordCorrect) return res.status(400).json({message: 'current password is not correct'})
      const salt = await generateSalt()
      const newPassHash = await generatePassword(newPassword, salt)
      user.password = newPassHash
    }

    if (payoutMethod) {
      user.payoutMethod = payoutMethod
    }

    if (bankDetails) {
      user.bankAccountDetails = bankDetails
    }

    await user.save()

    return res.status(200).json({ message: 'User updated successfully', user})

  } catch (error) {
    console.log("error updating the user: ", error);
    return res.status(500).json({ error })
  }

}