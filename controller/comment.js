// const express = require('express');
// const mongoose = require('mongoose');

// const app = express.Router();

// // Define a comment schema
// const commentSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   movie_id: String,
//   text: String,
//   date: Date,
// });

// const Comment = mongoose.model('Comment', commentSchema);

// // Middleware to parse JSON
// app.use(express.json());

// // Routes
// // define routes

// // Get all comments
// app.get('/', async (req, res) => {
//   try {
//     const comments = await Comment.find();
//     res.json(comments);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Create a new comment
// app.post('/', async (req, res) => {
//   try {
//     const comment = new Comment(req.body);
//     const savedComment = await comment.save();
//     res.json(savedComment);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get a comment by id
// app.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const comment = await Comment.findById(id);
//     res.json(comment);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update a comment by id
// app.patch('/:id', async (req, res) => {
//     try{
//         const { id } = req.params;
//         const comment = await Comment.findById(id);
//         const { name, email, movie_id, text, date } = req.body;
//         if (name) comment.name = name;
//         if (email) comment.email = email;
//         if (movie_id) comment.movie_id = movie_id;
//         if (text) comment.text = text;
//         if (date) comment.date = date;
//         await comment.save();
//         res.json(comment);
//     }
//     catch(error){
//         res.status(500).json({ error: error.message });
//     }
// });

// // Delete a comment by id
// app.delete('/:id', async (req, res) => {
//     try{
//         const { id } = req.params;
//         const comment = await Comment.findById(id);
//         if (!comment) {
//             return res.status(404).json({ error: 'Comment not found' });
//         }
//         const result = await Comment.deleteOne({ _id: id }); 
//         res.json({ message: 'Comment deleted' });
//     }
//     catch(error){
//         res.status(500).json({ error: error.message });
//     }
// });

// module.exports = app;