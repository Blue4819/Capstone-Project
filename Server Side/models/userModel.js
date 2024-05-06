import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: { type: String, required: true, min: 2, max: 50 },
  lastName: { type: String, required: true, min: 2, max: 50 },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, max: 50, unique: true },
  password: { type: String, required: true, min: 8 },
  picturePath: {data: String, contentType: String},
  following: [{ type: String}],
  followers: [{ type: String }],
  followed_locations: [{ type: Schema.Types.ObjectId, ref: "Location" }],
  followed_activities: [{ type: Schema.Types.ObjectId, ref: "Activity" }],
  location: { type: String, default: "" },
  age: { type: Number, default: 0 },
  bio: { type: String, default: "" },
  gender: { type: String, default: "Prefer Not To Say" },
  dob: { type: Date},
}, { timestamps: true });

export default mongoose.model('User', UserSchema);