import joi from 'joi';

const signupValidation = (req, res, next) => {
    const schema = joi.object({
        username: joi.string().min(3).max(50).required(), // match frontend
        email: joi.string().email().required(),
        password: joi.string().min(6).max(100).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message, success: false });
    }
    next();
};

const loginValidation = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).max(100).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message, success: false });
    }
    next();
};

export { signupValidation, loginValidation };
