import crypto from "crypto";
import Payment from "../models/payment.model.js";
import Interview from "../models/Interview.js";

import { sendPaymentSuccessEmail } from "../utils/sendEmail.js";
import { sendPaymentSuccessSMS } from "../utils/sendSMS.js";

export const razorpayWebhook = async (req, res) => {
  try {
    console.log("🔥 WEBHOOK HIT"); // 👈 VERY IMPORTANT LOG

    // 1. Get webhook secret
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    // 2. Get signature sent by Razorpay
    const razorpaySignature = req.headers["x-razorpay-signature"];

    // 3. Generate expected signature using RAW body
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(req.body) // raw buffer
      .digest("hex");

    // 4. Verify signature
    if (expectedSignature !== razorpaySignature) {
      console.log("❌ INVALID SIGNATURE");
      return res.status(400).json({ message: "Invalid webhook signature" });
    }

    // 5. Convert raw buffer to JSON
    const payload = JSON.parse(req.body.toString());

    console.log("🔥 Webhook event:", payload.event); // 👈 IMPORTANT LOG

    // 6. Check event type
    if (payload.event === "payment.captured") {
      const paymentEntity = payload.payload.payment.entity;

      const orderId = paymentEntity.order_id;
      const paymentId = paymentEntity.id;

      console.log("💰 Payment captured for order:", orderId);

      // 7. Update payment status
      const payment = await Payment.findOneAndUpdate(
        { orderId },
        { paymentId, status: "PAID" },
        { new: true }
      );

      // 8. Create interview after payment
      if (payment) {
        console.log("🧾 Payment found in DB. Creating interview...");

        await Interview.create({
          name: payment.name,
          email: payment.email,
          phone: payment.phone,
        });

        // 📧 Send email
        try {
          console.log("📧 About to send email to:", payment.email);
          await sendPaymentSuccessEmail(payment.email, payment.name);
        } catch (e) {
          console.error("❌ Email failed:", e);
        }

        // 📱 Send SMS
        try {
          console.log("📱 About to send SMS to:", payment.phone);
          await sendPaymentSuccessSMS(payment.phone, payment.name);
        } catch (e) {
          console.error("❌ SMS failed:", e);
        }
      } else {
        console.log("❌ Payment NOT found in DB for order:", orderId);
      }
    } else {
      console.log("⚠️ Ignored event:", payload.event);
    }

    // 9. Respond to Razorpay
    res.status(200).json({ status: "ok" });

  } catch (error) {
    console.error("🔥 Webhook Error:", error);
    res.status(500).json({ message: "Webhook processing failed" });
  }
};
