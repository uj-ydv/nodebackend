const Comment = require('../models/comment.js');


// Get all comments
const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Create a new comment
const createComment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        const savedComment = await comment.save();
        res.json(savedComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get a comment by id
const getOneComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findById(id);
        res.json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Update a comment by id
const updateComment = async (req, res) => {
    try{
        const { id } = req.params;
        const comment = await Comment.findById(id);
        const { name, email, movie_id, text, date } = req.body;
        if (name) comment.name = name;
        if (email) comment.email = email;
        if (movie_id) comment.movie_id = movie_id;
        if (text) comment.text = text;
        if (date) comment.date = date;
        await comment.save();
        res.json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Delete a comment by id
const deleteComment = async (req, res) => {
    try{
        const { id } = req.params;
        const comment = await Comment.findById(id);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        const result = await Comment.deleteOne({ _id: id }); 
        res.json({ message: 'Comment deleted' });
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllComments,
    createComment,
    getOneComment,
    updateComment,
    deleteComment
  };