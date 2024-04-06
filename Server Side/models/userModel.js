const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema(
    {
      firstName: {type: String,required: true,min: 2,max: 50,},
      lastName: {type: String,required: true,min: 2,max: 50,},
      username: {type:String, required:true, unique:true,},
      email: {type: String,required: true,max: 50,unique: true,},
      password: {type: String,required: true,min: 8,},
      picturePath: {type: String,default: "",},
      following: [
        {
          type: mongoose.Types.ObjectId,
          ref: "user",
        },
      ],
      followers: [
        {
          type: mongoose.Types.ObjectId,
          ref: "user",
        },
      ],
      followed_locations: [
        {
          type: mongoose.Types.ObjectId,
          ref: "location",
        },
      ],
      followed_activities: [
        {
          type: mongoose.Types.ObjectId,
          ref: "activity",
        },
      ],
      location: String,
      bio: String,
      gender: String,
      age: Number,
    },
    { timestamps: true }
  );

module.exports = mongoose.model('User', userSchema)

