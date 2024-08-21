const mongoose = require("mongoose");

// connect to mongodb
exports.initMongoDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.info("🟢 Mongo connected successfully.");
      console.info("--------------------------------------------");
    })
    .catch((e) => console.log(e.message));
  return;
};
