// Purpose: Define the comment schema and export the model.

import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const commentSchema = new Schema({
    name: String,
    email: String,
    movie_id: String,
    text: String,
    date: Date,
    });

export default model('Comment', commentSchema);
