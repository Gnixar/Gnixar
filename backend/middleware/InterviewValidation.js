export const validateInterviewForm = (req, res, next) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "Name, Email, and Phone are required",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format",
    });
  }

  if (phone.length < 10) {
    return res.status(400).json({
      success: false,
      message: "Phone number must be at least 10 digits",
    });
  }

  next();
};
