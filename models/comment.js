const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentSchema = new Schema({
    name: String,
    email: String,
    movie_id: String,
    text: String,
    date: Date,
});

module.exports = model('Comment', commentSchema);