import mongoose from "mongoose"
const { Schema } = mongoose

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
    },
    rewardEarned: {
      type: Number,
      default: 0,
    },
    referredBy: {
      type: String
    },
    payoutMethod: {
      type: String,
    },
    bankAccountDetails: {
      type: String
    }
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v
      },
    },
    timestamps: true,
  }
)

const User = mongoose.model("User", userSchema)

export default User