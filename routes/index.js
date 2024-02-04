const express = require('express');
const commentRoute = require('./comment.js');

const router = express.Router();

router.use('/comments', commentRoute);

module.exports = router;