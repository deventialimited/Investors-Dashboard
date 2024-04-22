import mongoose from "mongoose"
const { Schema } = mongoose

const referralSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    referralCode: {
      type: String,
    },
    referralLink: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Active", "Completed", "Cancelled"],
      default: "Pending",
    },
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

const Referral = mongoose.model("Referral", referralSchema)

export default Referral
