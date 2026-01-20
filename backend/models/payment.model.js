import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    orderId: String,
    paymentId: String,
    amount: Number,
    status: {
      type: String,
      enum: ["CREATED", "PAID"],
      default: "CREATED",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
