import express from 'express';
import Post from '../models/postModel.js';
import { newPost, seePost, getUserPosts, likePost, addComment } from '../controllers/postController.js';

const router = express.Router();

// go to specific post
router.post('/new', newPost);

router.get('/:id', seePost);

router.get('/:userId/posts', getUserPosts);

router.patch('/:id/like', likePost);

router.post('/:id/comments', addComment);

export default router;