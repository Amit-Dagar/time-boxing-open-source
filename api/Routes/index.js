const router = require("express").Router();
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

// main api routes
router.use("/admin", require("@Admin/Routes"));

module.exports = router;
