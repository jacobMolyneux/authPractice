const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");

router.get("/login", authController.Login);

router.post("/login", authController.Login);

router.get("/signUp", authController.signUp);

router.post("/signUp", authController.signUp);

module.exports = router;
