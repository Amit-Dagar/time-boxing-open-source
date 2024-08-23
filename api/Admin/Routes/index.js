const router = require("express").Router();

// auth routes
router.use("/auth", require("./AuthRoutes"));
// task routes
router.use("/task", require("./TaskRoutes"));
// user routes
router.use("/user", require("./UserRoutes"));

module.exports = router;
