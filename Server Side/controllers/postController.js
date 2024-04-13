import Post from "../models/postModel.js";

export const newPost = async (req, res) => {
  try {
    const { userId, location, activity, description, picturePath, userPicturePath } = req.body;
    const post = new Post({ userId, location, activity, description, picturePath, userPicturePath });
    await post.save();
    res.json(post);
  } catch (error) {
    console.log(error);
    res.json({ error: "Failed to create post" });
  }
}

export const seePost = async (req,res) => {
  try {
    const { id } = req.params;
    const post = await Post.findOne({ _id: id });
    res.json(post);
  } catch (error) {
    res.json({ error });
  }
}