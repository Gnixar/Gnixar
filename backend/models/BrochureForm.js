import mongoose from "mongoose";

const brochureSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    course: { type: String, default: "Data Science Foundation" }
  },
  { timestamps: true }
);

export default mongoose.model("BrochureForm", brochureSchema);
