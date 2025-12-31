import joi from "joi";

export const formValidation = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().min(2).max(50).required(),
    email: joi.string().email().required(),
    phone: joi.string().pattern(/^[0-9]{10}$/).required(),
    degree: joi.string().required(),
    course: joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  next();
};
