import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {type: String,required: true,},
    location: String,
    activity: {type: [String], default: [],maxLength: 3},
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {type: Map, of: Boolean,},
    comments: {type: [String], default: [],},},
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;