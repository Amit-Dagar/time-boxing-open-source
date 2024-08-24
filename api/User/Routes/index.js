const router = require("express").Router();

// auth routes
router.use("/auth", require("./AuthRoutes"));
// task routes
router.use("/task", require("./TaskRoutes"));

module.exports = router;
