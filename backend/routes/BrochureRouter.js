import express from "express";
import { submitBrochureForm } from "../controllers/BrochureController.js";
import { brochureValidation } from "../middleware/BrochureValidation.js";

const router = express.Router();

router.post("/submit", brochureValidation, submitBrochureForm);

export default router;
