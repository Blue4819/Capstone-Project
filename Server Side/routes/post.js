const express = require('express')
const router = express.Router()
const Post = require('../models/postModel')

import{
    newPost,
    seePost,
    getUserPosts,
    likePost,
    addComment
} from "../controllers/postController.js";

//go to specific post
router.post("/new", newPost);

router.get("/:id", seePost);

router.get("/:userId/posts", getUserPosts);

router.patch("/:id/like", likePost);

router.post('/:id/comments', addComment);
