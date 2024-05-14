import mongoose from "mongoose";
const { Schema } = mongoose;

const receiptSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiptName: {
      type: String,
    },
    accountNo: {
      type: Number,
    },
    senderName: {
      type: String,
    },
    referenceNo: {
      type: String,
    },
    currency: {
      type: String,
    },
    iWillPayAmount: {
      type: Number,
    },
    commission: {
      type: Number,
    },
    receiptImg: {
      type: String,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

const Receipt = mongoose.model("Receipt", receiptSchema);

export default Receipt;
