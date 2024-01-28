// newCardValidation.js
import Joi from "joi";

const schemas = {
    title: Joi.string().min(2).max(256).required(),
    subtitle: Joi.string().min(2).max(256).required(''),
    description: Joi.string().min(2).max(256).required(),
    phone: Joi.string().length(10).pattern(/^05\d{8}$/).required().messages({
        "string.length": "Phone number must 05x-xxxxxxx",
        "string.pattern.base": "Phone number must only contain digits"
    }),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .min(5)
        .required(),
    web: Joi.string().min(14).max(256).allow(''),
    url: Joi.string().uri().min(14).max(256).required(''),
    alt: Joi.string().min(2).max(256).required(''),
    state: Joi.string().min(2).max(256).allow(''),
    country: Joi.string().min(2).max(256).required(),
    city: Joi.string().min(2).max(256).required(),
    street: Joi.string().min(2).max(256).required(),
    houseNumber: Joi.number().min(1).max(10000).required(),
    zip: Joi.number().min(2).max(9999999).allow(),
};

const validate = {
    title: (value) => schemas.title.validate(value),
    subtitle: (value) => schemas.subtitle.validate(value),
    description: (value) => schemas.description.validate(value),
    phone: (value) => schemas.phone.validate(value),
    email: (value) => schemas.email.validate(value),
    web: (value) => schemas.web.validate(value),
    url: (value) => schemas.url.validate(value),
    alt: (value) => schemas.alt.validate(value),
    state: (value) => schemas.state.validate(value),
    country: (value) => schemas.country.validate(value),
    city: (value) => schemas.city.validate(value),
    street: (value) => schemas.street.validate(value),
    houseNumber: (value) => schemas.houseNumber.validate(value),
    zip: (value) => schemas.zip.validate(value),
};

export default validate;
