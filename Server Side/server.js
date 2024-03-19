require('dotenv').config()
const express = require('express')

//invoking and starting the express app
const app = express()

//routes
app.get('/', (request, response) =>{
    response.json({mssg:"Welcome to the app"})
})

//listen for requests
app.listen(process.env.PORT, () =>{
    console.log("Listening on port", process.env.PORT)
})