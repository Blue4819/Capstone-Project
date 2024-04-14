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

export const getUserPosts = async(req,res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export const likePost = async(req,res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export const addComment = async(req,res) => {
  const { id } = req.params;
  const { userId, comment } = req.body;

  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    post.comments.push({ userId, comment });
    await post.save();

    res.status(201).json({ message: "Comment added successfully", post });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
}