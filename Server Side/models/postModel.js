import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  location: String,
  activity: { type: String, default: ''},
  caption: String,
  picture: {data: Buffer, contentType: String},
  userPicturePath: String,
  likes: { type: Map, of: Boolean },
  comments: [{ type: String, default: [] }],
}, { timestamps: true });

export default mongoose.model('Post', postSchema);