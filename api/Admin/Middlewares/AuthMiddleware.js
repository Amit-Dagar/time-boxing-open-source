const joi = require("joi");
const helper = require("@Utils/Helper");
const permission = require("@Utils/Permission");

const AdminModel = require("@Models/AdminModel");

// validate input data for register admin
// (this is for one time use after that disable route of register)
exports.validateRegister = async (req, res, next) => {
  // define schema for name, email and password
  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
  });

  // validate input data
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });

  // check if email is already registered;
  await helper.throwErrorIfExists({
    model: AdminModel,
    query: { email: req.body.email },
    module: "Email",
  });

  next();
};

// validate input data for login admin
exports.validateLogin = async (req, res, next) => {
  // define schema for email and password
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    captchaToken: joi.string().allow(""),
  });

  // validate input data
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });

  // validate re-captcha
  if (process.env.RECAPTCHA_ENABLE === "ON") await helper.verifyRecaptcha(req);

  next();
};

// if admin is authenticated
exports.isAuthenticated = async (req, res, next) => {
  req.user = permission.isAdmin(req);
  next();
};
