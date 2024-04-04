const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

import {
    signup,
    signin,
    saveInfo,
    profileInfo,
  } from "../controllers/userController.js";

//create a new user (will happen during login)
router.post("/signup", signup);

router.post("/login", signin);

router.post("/save_info", saveInfo);

router.get("/:id", profileInfo);

router.get("/:id", ownProfileInfo);

module.exports = router