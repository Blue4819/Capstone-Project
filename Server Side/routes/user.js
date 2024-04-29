import express from 'express';
import { signup, signin, saveInfo, profileInfo, ownProfileInfo, updateLocation, updateDOB, googleSignIn } from '../controllers/userController.js';
import User from '../models/userModel.js';

const router = express.Router();

router.post('/signup', signup);

router.post('/login', signin);

// handle Google authentication callback
router.post('/google/callback', googleSignIn);

router.post('/save_info', saveInfo);

router.get('/:id', profileInfo);

router.get('/own/:id', ownProfileInfo);

router.post('/update_location', updateLocation);

router.post('/updatedob', updateDOB);


export default router;