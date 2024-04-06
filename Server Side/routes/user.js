const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

import {
    signup,
    signin,
    saveInfo,
    profileInfo,
    updateLocation
  } from "../controllers/userController.js";

//create a new user (will happen during login)
router.post("/signup", signup);

router.post("/login", signin);

router.post("/save_info", saveInfo);

router.get("/:id", profileInfo);

router.get("/:id", ownProfileInfo);

router.post("/update_location", updateLocation)

module.exports = router