import express from 'express'
import { createAdminUser, loginUser, registerUser } from '../controllers/userController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter.post('/register-user',registerUser)
userRouter.post('/login-user',loginUser)
userRouter.post("/create-admin", authenticate, createAdminUser);
userRouter.get('/me', authenticate, (req, res) => {
  // req.user comes from authenticate middleware
  res.status(200).json(req.user);
});

export default userRouter;
