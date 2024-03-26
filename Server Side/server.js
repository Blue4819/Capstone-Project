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


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () =>{
            console.log("Connected to db and listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
