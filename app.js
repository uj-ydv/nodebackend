const express = require('express');
const mongoose = require('mongoose');
const commentRoute = require('./routes/commentRoute');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
// Replace <your-connection-string> with your MongoDB Atlas connection string
const uri = 'mongodb+srv://user1:LqTLU8Tf6w6raxqr@dbcluster.cah1q7r.mongodb.net/sample_mflix?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(cors()); // Use cors middleware

// Routes
app.use('/comments', commentRoute);

// Start the server
app.listen(port, () => {
  console.log(`Microservice listening at http://localhost:${port}`);
});
