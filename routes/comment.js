
import express from 'express';
import { getAllComments, createComment, getOneComment, updateComment, deleteComment } from '../controllers/comment.js';

const router = express.Router();

router.get('/all', getAllComments);
router.post('/', createComment);
router.get('/:id', getOneComment);
router.patch('/:id', updateComment);
router.delete('/:id', deleteComment);

export default router;