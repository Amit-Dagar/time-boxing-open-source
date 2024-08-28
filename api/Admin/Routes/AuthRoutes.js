const router = require("express").Router();
const { tryCatch } = require("@Utils/Helper");

// controllers and middlewares
const controller = require("@Admin/Controllers/AuthController");
const middleware = require("@Admin/Middlewares/AuthMiddleware");

// register admin
router.post(
  "/register",
  tryCatch(middleware.validateRegister),
  tryCatch(controller.register)
);

// login admin
router.post(
  "/login",
  tryCatch(middleware.validateLogin),
  tryCatch(controller.login)
);

// check admin token access
router.get(
  "/access",
  tryCatch(middleware.isAuthenticated),
  tryCatch(controller.checkAccess)
);

module.exports = router;
