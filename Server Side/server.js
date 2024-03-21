require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const userRoutes = require('./routes/user')

//invoking and starting the express app
const app = express()
app.use(express.json())  
app.use(cors())
app.use(cookieParser())
app.use((request, response, next) =>{
    console.log(request.path, request.method)
    next()
})

//routes
app.use('/user', userRoutes)

//listen for requests
app.listen(process.env.PORT, () =>{
    console.log("Listening on port", process.env.PORT)
})

