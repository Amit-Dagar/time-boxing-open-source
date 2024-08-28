const httpErrors = require("http-errors");
const auth = require("@Utils/Auth");

// throw permission denied error
const permissionDenied = () => {
  throw httpErrors(403, "You are not authorized to perform this action.");
};

// check if user is admin
exports.isAdmin = (req) => {
  const user = auth.verifyToken(req);
  if (user.type !== "admin") permissionDenied();

  return user;
};
