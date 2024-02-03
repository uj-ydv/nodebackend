import express from "express";
import commentRoute from "./comment.js";

const router = express.Router();

router.use('/comments', commentRoute);

export default router;
