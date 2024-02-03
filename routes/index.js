import express from "express";
import Comment from "../models/comment.js";

const router = express.Router();

router.use('/comments', commentRoute);

export default router;
