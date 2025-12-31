import BrochureForm from "../models/BrochureForm.js";

export const submitBrochureForm = async (req, res) => {
  try {
    const form = new BrochureForm(req.body);
    await form.save();

    res.status(201).json({
      success: true,
      message: "Brochure form submitted!",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
