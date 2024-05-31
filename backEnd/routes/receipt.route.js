import express from "express";
import { createReceipt ,getReceiptsByUserId,TotalCommission} from "../controllers/receipt.controller.js";
import { auth } from "../middlewares/auth.js";

import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/create-receipt", auth, upload.single("receipt"), createReceipt);
router.get("/getReceiptsByUserId",auth,getReceiptsByUserId);
router.get("/TotalCommission",auth,TotalCommission)

export { router as ReceiptRoute };
