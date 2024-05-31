import Referral from "../models/Referral.model.js";
import ShortUniqueId from "short-unique-id";
import mongoose from "mongoose";
import Receipt from "../models/Receipt.model.js";


const uid = new ShortUniqueId();

export const generateRef = async (req, res, next) => {
  try {
    const user = req.user;

    const refCode = uid.rnd();

    const referralLink = `${process.env.BASE_URL}/register/${refCode}`;
    const status = "Pending";

    const referral = await Referral.create({
      user: user._id,
      referralCode: refCode,
      referralLink,
      status,
    });

    return res.status(200).json({ referral });
  } catch (error) {
    console.log("error generating ref: ", error);
    return res.status(500).json({ error: error });
  }
};


export const TotalRefferal =async (req,res) =>{
  try {
    const userId = req.user._id;

    const totalReferrals = await Referral.countDocuments({ user: userId });

   
    return res.status(200).json({ totalReferrals });
  } catch (error) {
    console.error("Error getting total referrals: ", error);
    return res.status(500).json({ error: error.message });
  }

}




export const getAllRefs = async (req, res) => {
  try {
    const referrals = await Referral.find({});

    if (!referrals.length) {
      return res
        .status(404)
        .json({ message: "referrals not found for the user" });
    }

    return res.status(200).json({ referrals });
  } catch (error) {
    console.log("error getting  refs: ", error);
    return res.status(500).json({ error: error });
  }
};

export const getRefs = async (req, res) => {
  try {
    const userId = req.user._id;

    // Fetch referrals associated with the user
    const referrals = await Referral.find({ user: userId });

    if (!referrals.length) {
      return res.status(404).json({ message: "Referrals not found for the user" });
    }

    // Fetch receipts associated with the user
    const receipts = await Receipt.find({ user: userId });

    // Calculate total commission
    const totalCommission = receipts.reduce((acc, receipt) => acc + receipt.commission, 0);

    console.log("totalCommission", totalCommission, referrals);

    // Return referrals and total commission
    return res.status(200).json({ referrals, totalCommission });
  } catch (error) {
    console.error("Error getting referrals: ", error);
    return res.status(500).json({ error: error.message });
  
}
}


export const deleteRef = async (req, res) => {
  try {
    const refId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(refId)) {
      return res.status(400).json({ message: "Invalid reference ID" });
    }

    const deletedRef = await Referral.findByIdAndDelete(refId);
    if (!deletedRef) {
      return res.status(404).json({ message: "Reference not found" });
    }

    return res.status(200).json({ message: "Reference deleted successfully" });
  } catch (error) {
    console.log("error deleting ref: ", error);
    return res.status(500).json({ error: error });
  }
};

export const getAllactivities = async (req, res) => {
  try {
    const userId = req.user._id;

  
    const referrals = await Referral.find({ user: userId });

    const totalReferrals = referrals.length;


    const pendingReferrals = referrals.filter(
      (referral) => referral.status === "Pending"
    ).length;

    const totalCommissionAggregate = await Receipt.aggregate([
      { $match: { user: userId } },
      { $group: { _id: null, total: { $sum: "$commission" } } },
    ]);

   
    const totalCommission = totalCommissionAggregate.length
      ? totalCommissionAggregate[0].total
      : 0;

    const response = {
      totalReferrals,
      pendingReferrals,
      totalCommission,
      referrals,
    };

    return res.status(200).json(response);
  } catch (error) {
    console.log("Error getting referrals: ", error);
    return res.status(500).json({ error: "Server error" });
  }
};