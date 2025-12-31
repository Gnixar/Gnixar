import Interview from "../models/Interview.js";

export const createInterview = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;

    const interview = await Interview.create({
      name,
      email,
      phone,
    });

    res.status(201).json({
      success: true,
      message: "Interview form submitted successfully",
      data: interview,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllInterviews = async (req, res, next) => {
  try {
    const interviews = await Interview.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: interviews.length,
      data: interviews,
    });
  } catch (error) {
    next(error);
  }
};
