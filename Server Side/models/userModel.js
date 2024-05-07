import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: { type: String, required: true, min: 2, max: 50 },
  lastName: { type: String, required: true, min: 2, max: 50 },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, max: 50, unique: true },
  password: { type: String, required: true, min: 8 },
  picturePath: {data: String, contentType: String},
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Referring to the User schema
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }], 
  followed_locations: [{ type: String }], // Array of strings
  followed_activities: [{ type: String }],
  location: { type: String, default: "" },
  age: { type: Number, default: 0 },
  bio: { type: String, default: "" },
  gender: { type: String, default: "Prefer Not To Say" },
  dob: { type: Date},
}, { timestamps: true });

export default mongoose.model('User', UserSchema);