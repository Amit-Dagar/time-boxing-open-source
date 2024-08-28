const router = require("express").Router();

router.use("/auth", require("./AuthRoutes"));

module.exports = router;
