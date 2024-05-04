import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/post.js';
import userRoutes from './routes/user.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

//middleware
app.use(cors());
app.use(express.json())  

app.use((request, response, next) =>{
    console.log(request.path, request.method)
    next()
})

//routes
app.use('/api/user', userRoutes)
app.use('/api/post', postRoutes)

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