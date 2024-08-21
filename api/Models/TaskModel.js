const mongoose = require("mongoose");
const dataTypes = require("@Utils/SchemaHelper");

const TaskModel = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    task: dataTypes.stringRequired,
    date: dataTypes.stringRequiredIndex,
    startTime: dataTypes.stringRequired,
    endTime: dataTypes.stringRequired,
    duration: dataTypes.stringRequired,
    status: {
      type: String,
      enum: ["Pending", "Started", "Completed"],
      default: "Pending",
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Task", TaskModel);
