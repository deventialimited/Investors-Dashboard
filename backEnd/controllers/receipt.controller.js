import Joi from "joi";
import Receipt from "../models/Receipt.model.js";
import { upload } from "../utils/cloudinay.util.js";

export const createReceipt = async (req, res) => {
  const validation = Joi.object({
    receiptName: Joi.string().optional(),
    accountNo: Joi.number().integer().optional(),
    senderName: Joi.string().required(),
    referenceNo: Joi.string().optional(),
    currency: Joi.string().optional(),
    iWillPayAmount: Joi.number().optional(),
    commission: Joi.number().optional(),
  }).validate(req.body);

  if (validation.error) {
    return res.status(400).json({ message: validation.error.details[0].message });
  }

  try {
    const {
      receiptName,
      accountNo,
      senderName,
      referenceNo,
      currency,
      iWillPayAmount,
      commission,
    } = req.body;

    if (!req.file) {
      return res.status(404).json({ message: "Receipt image is required" });
    }

    // Access userId from authenticated user
    const userId = req.user._id;

    let receiptImg = await upload(req.file);

    // Create receipt including userId
    const receipt = await Receipt.create({
      user: userId,
      receiptName,
      accountNo,
      senderName,
      referenceNo,
      currency,
      iWillPayAmount,
      commission,
      receiptImg,
    });

    return res.status(200).json({ receipt });
  } catch (error) {
    console.log("Error creating receipt: ", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


export const getReceiptsByUserId = async (req, res) => {
  try {
    const userId = req.user._id;

    const receipts = await Receipt.find({ user: userId });

    if (!receipts.length) {
      return res.status(404).json({ message: "No receipts found for this user." });
    }

    const totalCommission = receipts.reduce((acc, receipt) => acc + receipt.commission, 0);

    return res.status(200).json({ receipts, totalCommission });
  } catch (error) {
    console.error("Error fetching receipts: ", error);
    return res.status(500).json({ error: "Server error" });
  }
};



export const TotalCommission =async(req,res)=>{
  try {
    const userId = req.user.id; // Assuming req.user is set by authenticateToken middleware
    const totalCommission = await Receipt.aggregate([
      { $match: { user: userId } },
      {
        $group: {
          _id: null,
          totalCommission: { $sum: '$commission' },
        },
      },
    ]);

    if (!totalCommission.length) {
      return res.status(404).json({ message: 'No commissions found' });
    }

    res.status(200).json({ totalCommission: totalCommission[0].totalCommission });
  } catch (error) {
    console.error('Error fetching total commission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

}

