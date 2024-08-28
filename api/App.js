require("module-alias/register");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// define global variables
env = module.exports = process.env;
rootDir = module.exports = __dirname;

// initialize server & express app
const app = express();

// app middlewares
app.use(cors());
app.use(express.json());
app.disable("x-powered-by"); // disable x-powered-by header
app.use(morgan("dev")); // log requests to the console

// initialize mongodb
require("@Utils/Config").initMongoDB();

// handle server REST API requests
app.use("/v1", require("@Routes/index"));

// handle server(404) errors
app.use((req, res, next) => {
  if (req.path.includes("media"))
    return res.download("." + decodeURIComponent(req.path));
  res.status(404);
  res.send({ message: "Page Not found." });
});

// handle server (500) errors
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ status: err.status || 500, message: err.message });
});

// start server
app.listen(env.PORT, () => {
  console.info("--------------------------------------------");
  if (env.DEBUG === "OFF") console.log = function () {};
  console.info(
    `${env.DEBUG === "ON" ? "🟡" : "🟢"} DEBUG mode => ${env.DEBUG}`
  );
  console.info(`🟢 Server Listening at port ${env.PORT}.`);
  console.info("--------------------------------------------");
});
