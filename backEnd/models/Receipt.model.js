import mongoose from "mongoose"
const { Schema } = mongoose

const receiptSchema = new Schema(
  {
    receiptName: {
      type: String,
      required: true
    },
    accountNo: {
      type: Number
    },
    senderName: {
      type:String,
      required: true
    },
    referenceNo: {
      type: String,
    },
    currency: {
      type: String
    },
    iWillPayAmount: {
      type: Number
    },
    commission: {
      type: Number
    },
    receiptImg: {
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

const Receipt = mongoose.model("Receipt", receiptSchema)

export default Receipt
