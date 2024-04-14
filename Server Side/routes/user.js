const userCtrl = require("../controllers/userController.js");
const express = require('express')
const {Schema} = mongoose;
const router = express.Router()
const User = require('../models/userModel')

//create a new user (will happen during login)
router.post("/signup", userCtrl.signup);

router.post("/login", userCtrl.signin);

router.post("/save_info", userCtrl.saveInfo);

router.get("/:id", userCtrl.profileInfo);

router.get("/:id", userCtrl.ownProfileInfo);

router.post("/update_location", userCtrl.updateLocation)

module.exports = router