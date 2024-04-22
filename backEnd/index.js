import express from "express"
import "dotenv/config"
import { UserRoute } from "./routes/user.route.js"
import { ReferralRoute } from './routes/referral.route.js'
import { ReceiptRoute } from './routes/receipt.route.js'
import cors from "cors"
import mongoose from "mongoose"
import { DashboardRoute } from "./routes/dashboard.route.js"

const app = express()
const PORT = process.env.PORT || 3000

// middlewares
app.use(express.json())
app.use(cors())

// apis / routes
app.use("/", UserRoute)
app.use('/referral', ReferralRoute)
app.use('/receipt', ReceiptRoute)
app.use('/dashboard', DashboardRoute)

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
  console.log("DB Connected")
  app.listen(PORT, () => {
    console.log(`investors dashboard listening on port ${PORT}`)
  })
})
.catch((err) => {
  console.error("MongoDB connection error:", err)
  process.exit(1)
})
