import Joi from "joi";

export const brochureValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().length(10).required(),
    course: Joi.string().optional()
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
