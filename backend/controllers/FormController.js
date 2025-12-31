import Form from "../models/Form.js";

export const submitForm = async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
