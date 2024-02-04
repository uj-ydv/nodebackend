const express = require('express');
const commentController = require('../controller/comment.js');

const router = express.Router();

router.get('/all', commentController.getAllComments);
router.post('/', commentController.createComment);
router.get('/:id', commentController.getOneComment);
router.patch('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router;