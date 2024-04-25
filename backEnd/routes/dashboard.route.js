import express from 'express'
import { auth } from '../middlewares/auth.js'
import { getChartData, getStats } from '../controllers/dashboard.controller.js'

const router = express.Router()

router.get('/get-stats', getStats)
router.get('/get-chart-data', getChartData)


export { router as DashboardRoute }