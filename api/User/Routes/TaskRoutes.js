const router = require("express").Router();
const helper = require("@Utils/Helper");
const tryCatch = helper.tryCatch;

// health check route
router.get(
  "/",
  tryCatch((req, res) => {
    res.send({
      message: "Running user task routes. ✅",
    });
  })
);

module.exports = router;
