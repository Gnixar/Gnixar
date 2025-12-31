import { Router } from "express";
import { login, signup } from "../controllers/AuthController.js";
import { signupValidation, loginValidation } from "../middleware/AuthValidation.js"

const router = Router();

router.post("/signup", signupValidation, signup);
router.post("/login", loginValidation, login);

export default router;
