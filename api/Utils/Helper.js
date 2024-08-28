const httpErrors = require("http-errors");
const axios = require("axios");

// Wrapper function to handle errors in async functions
exports.tryCatch = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    console.error(error);
    console.error("ERROR: " + error.message);
    next(error);
  }
};

// throw error if record already exists
exports.throwErrorIfExists = async (params) => {
  const { model, query, module } = params;
  var record = await model.findOne(query);
  if (record) throw httpErrors.Conflict(module + " Record already exists");

  return;
};

// throw error if record does not exist
exports.throwErrorIfNotExists = async (params) => {
  const { model, query, module } = params;
  var record = await model.findOne(query);
  if (!record) throw httpErrors.Conflict(module + " not exists");

  return record;
};

// verify recaptcha
exports.verifyRecaptcha = async (req) => {
  const token = req.body.captchaToken;
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
  const response = await axios.post(url);
  const { success } = response.data;

  // throw exception if recaptcha verification fails
  if (!success) throw httpErrors(400, "Recaptcha verification failed");

  return true;
};
