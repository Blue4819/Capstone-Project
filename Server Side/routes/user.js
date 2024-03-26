const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

//create a new user (will happen during login)
router.post('/', async (request, response) => {
    const {username, email} = request.body
    try{
        const user = await User.create({username, email})
        response.status(200).json(user)
    } catch(error) {
        response.status(400).json({error: error.message})
    }
})

//

//edit user profile

//delete user profile

module.exports = router