import express from "express";
import {
  createInterview,
//   getAllInterviews,
} from "../controllers/InterviewController.js";
import { validateInterviewForm } from "../middleware/InterviewValidation.js";

const router = express.Router();

// Submit interview form
router.post("/mock", validateInterviewForm, createInterview);

// // Get all interview submissions (admin use)
// router.get("/", getAllInterviews);

export default router;
