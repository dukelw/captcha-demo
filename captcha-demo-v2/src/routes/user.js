const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.get("/register", userController.showRegisterForm);

router.get("/captcha-register", userController.showCaptchaRegisterForm);

router.post("/captcha-register", userController.captchaRegisterUser);

router.post("/register", userController.registerUser);

module.exports = router;
