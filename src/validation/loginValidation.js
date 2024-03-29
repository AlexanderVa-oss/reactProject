// loginValidation.js
import Joi from "joi";

const emailLoginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .required(),
});

// Before you change passwordLoginSchema check the password regex in registerValidation.js
const passwordLoginSchema = Joi.object({
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{6,}$/
      )
    )
    .min(7)
    .max(20)
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least one uppercase, lowercase, special character(!@#$%^&*-), and number",
    }),
});

const validateEmailLogin = (emailToCheck) =>
  emailLoginSchema.validate(emailToCheck);
const validatePasswordLogin = (passwordToCheck) =>
  passwordLoginSchema.validate(passwordToCheck);

export { validateEmailLogin, validatePasswordLogin };

