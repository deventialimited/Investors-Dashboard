import express from 'express'
import { auth } from '../middlewares/auth.js'
import { getStats } from '../controllers/dashboard.controller.js'

const router = express.Router()

router.get('/get-stats', getStats)


export { router as DashboardRoute }