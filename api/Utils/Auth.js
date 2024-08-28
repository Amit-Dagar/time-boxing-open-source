const bcrypt = require("bcryptjs");
const httpErrors = require("http-errors");
const jwt = require("jsonwebtoken");

// compare bcrypt password
exports.comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

// hash password
exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

// generate jwt token
exports.generateToken = (payload) => {
  const options = { expiresIn: process.env.TOKEN_EXPIRY };
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, options);
};

// verify jwt token
exports.verifyToken = (req) => {
  const authorization = req.headers.authorization;
  if (!authorization) throw httpErrors(401, "Unauthorized Request");

  const token = authorization.split(" ")[1];
  if (!token) throw httpErrors(401, "Unauthorized Request");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) throw httpErrors(401, "Unauthorized Request");
    return decoded;
  } catch (error) {
    throw httpErrors(401, "Unauthorized Request");
  }
};
