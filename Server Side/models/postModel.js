const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  location: String,
  activity: [{ type: String, default: [], maxLength: 3 }],
  description: String,
  picturePath: String,
  userPicturePath: String,
  likes: { type: Map, of: Boolean },
  comments: [{ type: String, default: [] }],
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;