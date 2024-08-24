const router = require("express").Router();
const adminRoutes = require("@Admin/Routes");
const userRoutes = require("@User/Routes");
const helper = require("@Utils/Helper");
const tryCatch = helper.tryCatch;

// health check route
router.get(
  "/",
  tryCatch((req, res) => {
    res.send({
      message: "✅ Server health is in good state.",
    });
  })
);

// admin routes
router.use("/admin", adminRoutes);
// user routes
router.use("/user", userRoutes);

module.exports = router;
