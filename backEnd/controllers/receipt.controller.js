import Joi from 'joi'
import Receipt from '../models/Receipt.model.js'
import { upload } from '../utils/cloudinay.util.js'

export const createReceipt = async (req, res) => {

  const validation = Joi.object({
    receiptName: Joi.string().required(),
    accountNo: Joi.number().integer().optional(),
    senderName: Joi.string().required(),
    referenceNo: Joi.string().optional(),
    currency: Joi.string().optional(),
    iWillPayAmount: Joi.number().optional(),
    commission: Joi.number().optional(),
  }).validate(req.body)

  if (validation.error) {
    return res
      .status(400)
      .json({ message: validation.error.details[0].message })
  }

  try {
    
    const { 
      receiptName,
      accountNo,
      senderName,
      referenceNo,
      currency,
      iWillPayAmount,
      commission,
    } = req.body;

    if (!req.file) {
      return res.status(404).json({ message: "receipt is required" })
    }

    let receiptImg = await upload(req.file)

    const receipt = await Receipt.create({
      receiptName,
      accountNo,
      senderName,
      referenceNo,
      currency,
      iWillPayAmount,
      commission,
      receiptImg 
    })

    return res.status(200).json({receipt})

  } catch (error) {
    console.log("error createing receipt: ", error);
    return res.status(500).json({ error: error })
  }

}