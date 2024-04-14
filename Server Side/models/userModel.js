import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: { type: String, required: true, min: 2, max: 50 },
  lastName: { type: String, required: true, min: 2, max: 50 },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, max: 50, unique: true },
  password: { type: String, required: true, min: 8 },
  picturePath: { type: String, default: "" },
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  followed_locations: [{ type: Schema.Types.ObjectId, ref: "Location" }],
  followed_activities: [{ type: Schema.Types.ObjectId, ref: "Activity" }],
  location: String,
  bio: String,
  gender: String,
  age: Number,
}, { timestamps: true });

export default mongoose.model('User', UserSchema);