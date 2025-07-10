import express from 'express';
import { body } from 'express-validator';
import { registerAdmin, loginAdmin } from '../controllers/adminController.js';

const router = express.Router();

router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Enter valid email'),
    body('password').isLength({ min: 6 }).withMessage('Min 6 characters'),
  ],
  registerAdmin
);

router.post('/login', loginAdmin);

export default router;
