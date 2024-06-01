import express from "express";
import { auth } from "../middlewares/auth.js";
import { getStats,getChartData } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get("/get-stats",auth,getStats);
router.get("/get-chart-data",auth,getChartData)

export { router as DashboardRoute };
