const mongoose = require("mongoose");
const dataTypes = require("@Utils/SchemaHelper");

const AdminModel = new mongoose.Schema(
  {
    email: dataTypes.stringRequired,
    password: dataTypes.stringRequired,
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Admin", AdminModel);
