import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    degree: String,
    course: String,
  },
  { timestamps: true }
);

export default mongoose.model("Form", formSchema);
