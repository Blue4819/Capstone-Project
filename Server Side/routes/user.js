import express from 'express';
import { signup, signin, saveInfo, profileInfo, ownProfileInfo, updateLocation, updateDOB } from '../controllers/userController.js';
import User from '../models/userModel.js';

const router = express.Router();

// create a new user (will happen during login)
router.post('/signup', signup);

router.post('/login', signin);

router.post('/save_info', saveInfo);

router.get('/:id', profileInfo);

router.get('/own/:id', ownProfileInfo);

router.post('/update_location', updateLocation);

router.post('/updatedob', updateDOB);


export default router;