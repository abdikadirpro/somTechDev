import express from 'express'
import { createPost, deletePost, getPost, updatePost } from '../controllers/postController.js';
import { authenticate } from '../middleware/authMiddleware.js';
import upload from '../middleware/upload.js';

const createPostRouter = express.Router();



createPostRouter.post('/create-post',authenticate,upload.single('image'),createPost)
createPostRouter.get('/get-post',getPost);
createPostRouter.delete('/delete-post/:id', authenticate, deletePost);

createPostRouter.put(
  "/update-post/:id",
  authenticate,
  upload.single("image"),
 updatePost
);

export default createPostRouter;
