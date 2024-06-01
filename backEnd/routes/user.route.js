import express from "express";
import { login, signup, updateUser,} from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.post("/update-user", upload.single("avatar"),auth, updateUser);


export { router as UserRoute };
