import Payment from "../models/payment.model.js";
import razorpay from "../config/razorpay.config.js";

export const createOrder = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const order = await razorpay.orders.create({
      amount: 98 * 100, // ₹98
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    await Payment.create({
      name,
      email,
      phone,
      orderId: order.id,
      amount: order.amount,
    });

    res.json({
      key: process.env.RAZORPAY_KEY_ID,
      orderId: order.id,
      amount: order.amount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Order creation failed" });
  }
};

export const paymentSuccess = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id } = req.body;

    await Payment.findOneAndUpdate(
      { orderId: razorpay_order_id },
      {
        paymentId: razorpay_payment_id,
        status: "PAID",
      }
    );

    res.json({
      success: true,
      redirectUrl: "https://interviewx-connect.koviki.com/",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Payment update failed" });
  }
};
