require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const userRoutes = require('./routes/user')

//invoking and starting the express app
const app = express()

//middleware
app.use(express.json())  

app.use((request, response, next) =>{
    console.log(request.path, request.method)
    next()
})

//routes
app.use('/api/user', userRoutes)

//listen for requests
app.listen(process.env.PORT, () =>{
    console.log("Listening on port", process.env.PORT)
})

