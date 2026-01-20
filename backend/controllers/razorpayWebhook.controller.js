import crypto from "crypto";
import Payment from "../models/payment.model.js";
import Interview from "../models/Interview.js";

import { sendPaymentSuccessEmail } from "../utils/sendEmail.js";
import { sendPaymentSuccessSMS } from "../utils/sendSMS.js";

export const razorpayWebhook = async (req, res) => {
  try {
    console.log("🔥 WEBHOOK HIT");

    // 1. Get webhook secret
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    // 2. Get signature sent by Razorpay
    const razorpaySignature = req.headers["x-razorpay-signature"];

    if (!razorpaySignature) {
      console.log("❌ Missing Razorpay signature header");
      return res.status(400).json({ message: "Signature missing" });
    }

    // 3. Ensure body is ALWAYS a Buffer
    const body = Buffer.isBuffer(req.body)
      ? req.body
      : Buffer.from(JSON.stringify(req.body));

    // 4. Generate expected signature
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex");

    // 5. Verify signature
    if (expectedSignature !== razorpaySignature) {
      console.log("❌ INVALID SIGNATURE");
      console.log("Expected:", expectedSignature);
      console.log("Received:", razorpaySignature);
      return res.status(400).json({ message: "Invalid webhook signature" });
    }

    // 6. Parse payload safely
    const payload = Buffer.isBuffer(req.body)
      ? JSON.parse(req.body.toString())
      : req.body;

    console.log("🔥 Webhook event:", payload.event);

    // 7. Handle event
    if (payload.event === "payment.captured") {
      const paymentEntity = payload.payload.payment.entity;

      const orderId = paymentEntity.order_id;
      const paymentId = paymentEntity.id;

      console.log("💰 Payment captured for order:", orderId);

      // 8. Update payment status
      const payment = await Payment.findOneAndUpdate(
        { orderId },
        { paymentId, status: "PAID" },
        { new: true }
      );

      // 9. Create interview and send notifications
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
          console.log("✅ Email sent successfully");
        } catch (e) {
          console.error("❌ Email failed:", e);
        }

        // 📱 Send SMS
        try {
          console.log("📱 About to send SMS to:", payment.phone);
          await sendPaymentSuccessSMS(payment.phone, payment.name);
          console.log("✅ SMS sent successfully");
        } catch (e) {
          console.error("❌ SMS failed:", e);
        }
      } else {
        console.log("❌ Payment NOT found in DB for order:", orderId);
      }
    } else {
      console.log("⚠️ Ignored event:", payload.event);
    }

    // 10. Respond to Razorpay
    res.status(200).json({ status: "ok" });

  } catch (error) {
    console.error("🔥 Webhook Error:", error);
    res.status(500).json({ message: "Webhook processing failed" });
  }
};
