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

export const getChartData = async (req, res) => {
  try {
    const startDate = moment().startOf("month").toDate();
    const endDate = moment().endOf("month").toDate();

    // Fetch total earning, total cash in, and total commission data from the database
    const totalEarning = await User.aggregate([
      {
        $match: { createdAt: { $gte: startDate, $lte: endDate } },
      },
      {
        $group: { _id: null, totalEarning: { $sum: "$rewardEarned" } },
      },
    ]);

    const totalPayment = await Receipt.aggregate([
      {
        $match: { createdAt: { $gte: startDate, $lte: endDate } },
      },
      {
        $group: {
          _id: null,
          totalCashIn: { $sum: "$iWillPayAmount" },
          totalCommission: { $sum: "$commission" },
        },
      },
    ]);

    // Format the data to send to the client
    const dataPoints = [totalEarning[0]?.totalEarning || 0, totalPayment[0]?.totalCashIn || 0, totalPayment[0]?.totalCommission || 0];
    const labels = ["Total Earning", "Total Cash In", "Total Commission"];

    return res.status(200).json({ dataPoints, labels });
  } catch (error) {
    console.log("Error fetching total earning, payment, and commission for chart data:", error);
    return res.status(500).json({ error: "Failed to fetch chart data" });
  }
};