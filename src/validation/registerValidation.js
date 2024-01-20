// registerValidation.js
import Joi from "joi";

const schemas = {
  first: Joi.string().min(2).max(256).required(),
  middle: Joi.string().min(2).max(256).allow(''),
  last: Joi.string().min(2).max(256).required(),
  phone: Joi.string().length(10).pattern(/^05\d{8}$/).required().messages({
    "string.length": "Phone number must 05x-xxxxxxx",
    "string.pattern.base": "Phone number must only contain digits"
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .required(),

  // Before you change password check the password regex in passwordLoginSchema.js
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
  url: Joi.string().uri().min(14).max(256).allow(''),
  alt: Joi.string().min(2).max(256).allow(''),
  state: Joi.string().min(2).max(256).allow(''),
  country: Joi.string().min(2).max(256).required(),
  city: Joi.string().min(2).max(256).required(),
  street: Joi.string().min(2).max(256).required(),
  houseNumber: Joi.number().min(1).max(10000).required(),
  zip: Joi.number().min(2).max(9999999).required(),
  isBusiness: Joi.boolean()
};

const validate = {
  first: (value) => schemas.first.validate(value),
  middle: (value) => schemas.middle.validate(value),
  last: (value) => schemas.last.validate(value),
  phone: (value) => schemas.phone.validate(value),
  email: (value) => schemas.email.validate(value),
  password: (value) => schemas.password.validate(value),
  url: (value) => schemas.url.validate(value),
  alt: (value) => schemas.alt.validate(value),
  state: (value) => schemas.state.validate(value),
  country: (value) => schemas.country.validate(value),
  city: (value) => schemas.city.validate(value),
  street: (value) => schemas.street.validate(value),
  houseNumber: (value) => schemas.houseNumber.validate(value),
  zip: (value) => schemas.zip.validate(value),
  isBusiness: (value) => schemas.isBusiness.validate(value),
};

export default validate;
