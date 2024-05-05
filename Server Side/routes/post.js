import express from 'express';
import Post from '../models/postModel.js';
import { newPost, seePost, getUserPosts, likePost, addComment } from '../controllers/postController.js';
import multer from 'multer';
// Multer configuration for storing files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

// go to specific post
router.post('/new', upload.single('picture'), newPost);

router.get('/view/:id', seePost);

router.get('/:userId/posts', getUserPosts);

router.patch('/:id/like', likePost);

router.post('/:id/comments', addComment);

export default router;