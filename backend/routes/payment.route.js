import express from "express";
import { createOrder, paymentSuccess } from "../controllers/payment.controller.js";
import verifyPayment from "../middleware/razorpayverify.middleware.js";
import { razorpayWebhook } from "../controllers/razorpayWebhook.controller.js";

const router = express.Router();

// Create Razorpay order
router.post("/mock", createOrder);

// Verify payment (frontend redirect only)
router.post("/verify", verifyPayment, paymentSuccess);

// ✅ Razorpay webhook (REAL PAYMENT CONFIRMATION)
// ⚠️ MUST use express.raw()
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  razorpayWebhook
);

export default router;
