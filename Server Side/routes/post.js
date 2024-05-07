import express from 'express';
import Post from '../models/postModel.js';
import { newPost, seePost, getUserPosts, likePost, addComment, updatePost, deletePost } from '../controllers/postController.js';
import multer from 'multer';
// Multer configuration for storing files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

// go to specific post
router.post('/new', upload.single('picture'), newPost);
router.post('/update', updatePost);
router.post('/delete', deletePost);

router.get('/view/:id', seePost);

router.get('/:id', getUserPosts);

router.patch('/like/:id', likePost);

router.post('/:id/comments', addComment);

export default router;