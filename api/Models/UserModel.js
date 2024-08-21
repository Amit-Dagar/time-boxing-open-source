const mongoose = require("mongoose");
const dataTypes = require("@Utils/SchemaHelper");

const UserModel = new mongoose.Schema(
  {
    name: dataTypes.stringRequired,
    email: dataTypes.stringRequired,
    password: dataTypes.stringRequired,
    status: dataTypes.booleanDefaultTrue,
    timezone: dataTypes.stringDefaultEmpty,
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("User", UserModel);
