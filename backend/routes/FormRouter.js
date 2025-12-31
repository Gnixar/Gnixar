import express from "express";
import { submitForm } from "../controllers/FormController.js";
import { formValidation } from "../middleware/FormValidation.js";

const router = express.Router();

router.post("/submit", formValidation, submitForm);

export default router;
