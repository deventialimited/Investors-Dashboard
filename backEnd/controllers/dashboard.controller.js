import User from "../models/User.model.js"
import Receipt from "../models/Receipt.model.js"
import Referral from "../models/Referral.model.js"
import moment from "moment";

export const getStats = async (req, res) => {
  try {
    const startDate = moment().startOf("month").toDate();
    const endDate = moment().endOf("month").toDate();

    const totalEarning = await User.aggregate([
      { 
        $match: { createdAt: { $gte: startDate, $lte: endDate } } 
      },
      { 
        $group: { _id: null, totalEarning: { $sum: "$rewardEarned" } } 
      }
    ])

    const totalPayment = await Receipt.aggregate([
      { 
        $match: { createdAt: { $gte: startDate, $lte: endDate } } 
      },
      { 
        $group: { 
          _id: null, 
          totalCashIn: { $sum: "$iWillPayAmount" },
          totalCommission: { $sum: "$commission" } 
        } 
      }
    ]);

    const totalReferrals = await Referral.countDocuments({
      createdAt: { $gte: startDate, $lte: endDate }
    });

    if (totalEarning.length === 0 || totalPayment.length === 0) {
      return res.status(404).json({ message: "No data found" })
    }

    return res.status(200).json({
      totalEarning: totalEarning[0].totalEarning,
      totalCashIn: totalPayment[0].totalCashIn,
      totalCommission: totalPayment[0].totalCommission,
      totalReferrals
    });
  } catch (error) {
    console.log("Error fetching total earning, payment, and commission:", error);
    return res.status(500).json({ error });
  }
}