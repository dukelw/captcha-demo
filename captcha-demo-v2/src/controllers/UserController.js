const userService = require("../services/user");
const fs = require("fs");
const path = require("path");
exports.showRegisterForm = (req, res) => {
  res.render("register");
};

const CAPTCHA_DIR = path.join(__dirname, "../images");

const getRandomCaptcha = () => {
  const files = fs.readdirSync(CAPTCHA_DIR);
  if (files.length === 0) throw new Error("No CAPTCHA images found.");
  const randomFile = files[Math.floor(Math.random() * files.length)];
  return { filename: randomFile, answer: path.parse(randomFile).name };
};

exports.showCaptchaRegisterForm = (req, res) => {
  const captcha = getRandomCaptcha();
  req.session.captchaAnswer = captcha.answer;
  res.render("captcha-register", {
    captchaImage: `/images/${captcha.filename}`,
  });
};

exports.captchaRegisterUser = async (req, res) => {
  try {
    const { username, email, password, captcha } = req.body;

    if (!username || !email || !password || !captcha) {
      return res.status(400).send("All fields are required!");
    }

    if (captcha !== req.session.captchaAnswer) {
      const newCaptcha = getRandomCaptcha();
      req.session.captchaAnswer = newCaptcha.answer;

      return res.status(500).render("captcha-register", {
        captchaImage: `/images/${newCaptcha.filename}`,
      });
    }

    const existingUser = await userService.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).send("Email already registered!");
    }

    await userService.registerUser(username, email, password);
    res.status(200).render("welcome", { username });
  } catch (error) {
    res.status(500).send("Error registering user: " + error.message);
  }
};

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).send("All fields are required!");
    }

    const existingUser = await userService.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).send("Email already registered!");
    }

    await userService.registerUser(username, email, password);

    res.render("welcome", { username });
  } catch (error) {
    res.status(500).send("Error registering user: " + error.message);
  }
};

exports.showWelcomePage = (req, res) => {
  res.render("welcome");
};
