const express = require('express')
const router = express.Router()
const Post = require('../models/postModel')

import{
    newPost,
    seePost
} from "../controllers/postController.js";

//go to specific post
router.post("/new", newPost);

router.get("/:id", seePost);
