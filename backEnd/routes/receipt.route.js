import express from "express";
import { createReceipt } from "../controllers/receipt.controller.js";
import { auth } from "../middlewares/auth.js";

import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/create-receipt", auth, upload.single("receipt"), createReceipt);

export { router as ReceiptRoute };
