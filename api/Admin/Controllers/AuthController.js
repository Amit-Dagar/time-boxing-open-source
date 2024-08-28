const helper = require("@Utils/Helper");
const auth = require("@Utils/Auth");

const AdminModel = require("@Models/AdminModel");

// Admin create
exports.register = async (req, res) => {
  // create new admin
  await AdminModel.create({
    ...req.body,
    password: await auth.hashPassword(req.body.password),
  });

  // return response
  res.status(201).json({ message: "Admin created successfully" });
};

// Admin login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // check if admin exists
  const query = { model: AdminModel, query: { email }, module: "Email" };
  const admin = await helper.throwErrorIfNotExists(query);

  // check if password is not correct
  if (!(await auth.comparePassword(password, admin.password)))
    return res.status(400).json({ message: "Invalid password" });

  const obj = { id: admin._id, email: admin.email, type: "admin" };

  // return response
  res.status(200).json({
    message: "Admin logged in successfully",
    token: auth.generateToken(obj),
  });
};

// Admin check token access
exports.checkAccess = async (req, res) => {
  res.status(200).json({ message: "Admin access granted" });
};
