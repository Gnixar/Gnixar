// -------------------- 1️⃣ LOAD ENV FIRST --------------------
import dotenv from "dotenv";
dotenv.config();

// -------------------- 2️⃣ IMPORT DEPENDENCIES --------------------
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db.js";

import AuthRouter from "./routes/AuthRouter.js";
import FormRouter from "./routes/FormRouter.js";
import BrochureRouter from "./routes/BrochureRouter.js";
import InterviewRouter from "./routes/InterviewRouter.js";
import PaymentRouter from "./routes/payment.route.js";

// -------------------- 3️⃣ INITIALIZE APP --------------------
const app = express();
const PORT = process.env.PORT || 5000;

// -------------------- 4️⃣ MIDDLEWARES --------------------
app.use(cors());

// ✅ Normal body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// -------------------- 5️⃣ DATABASE CONNECTION --------------------
connectDB();

// -------------------- 6️⃣ ROUTES --------------------
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend Running Successfully 🚀",
  });
});

app.use("/api/auth", AuthRouter);
app.use("/api/form", FormRouter);
app.use("/api/brochure", BrochureRouter);
app.use("/api/interview", InterviewRouter);
app.use("/api/payment", PaymentRouter); // Razorpay routes (webhook raw handled inside router)

// -------------------- 7️⃣ 404 HANDLER --------------------
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// -------------------- 8️⃣ GLOBAL ERROR HANDLER --------------------
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// -------------------- 9️⃣ START SERVER --------------------
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
