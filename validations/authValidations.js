const Joi = require("joi");

const registerSchema = Joi.object({
    firstName : Joi.string().required("firstName is required"),
    lastName: Joi.string().required("LastName is required"),
    userName:Joi.string().min(5).max(20).required("userName is required"),
    email: Joi.string().email().required("Email is required"),
    password: Joi.string().min(6).max(20).required("password is required"),
    role:Joi.string().default("Employee"),
    age:Joi.number().min(18).max(60),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required("Email is required"),
    password: Joi.string().min(6).max(20).required("Password is required"),
});

module.exports = {registerSchema, loginSchema};