import express from 'express';
import { signup, signin, saveInfo, profileInfo, ownProfileInfo, updateLocation, updateDOB, googleSignIn, googleSignup } from '../controllers/userController.js';
import User from '../models/userModel.js';
import multer from 'multer';
// Multer configuration for storing files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.post('/signup', signup);

router.post('/login', signin);

// handle Google authentication callback
router.post('/google/callback', googleSignIn);
router.post('/google/callback/signup', googleSignup);

router.post('/save_info', upload.single('profilePicture'), saveInfo);

router.get('/:id', profileInfo);

router.get('/own/:id', ownProfileInfo);

router.post('/update_location', updateLocation);

router.post('/updatedob', updateDOB);


export default router;