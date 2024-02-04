const express = require('express');
const mongoose = require('mongoose');
const indexRoute = require('./routes/index.js');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
// Replace <your-connection-string> with your MongoDB Atlas connection string
const uri = 'mongodb+srv://<user>:<Password>@<dbclusterurl>/<collectionName>?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(cors()); // Use cors middleware
app.use(express.json()); // Use express.json() middleware

// Routes
app.use('/api', indexRoute);

// Start the server
app.listen(port, () => {
  console.log(`Microservice listening at http://localhost:${port}`);
});

app.use(express.json()); 