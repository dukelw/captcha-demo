const express = require("express");
const router = express.Router();
const siteController = require("../controllers/SiteController");
const asyncHandler = require("../helpers/async-handler");

router.get("/welcome", asyncHandler(siteController.welcome));
router.get("/", asyncHandler(siteController.index));

module.exports = router;
