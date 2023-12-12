import express from 'express';
import { login, register, googleAuth } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/google-auth', googleAuth);

export default router;
