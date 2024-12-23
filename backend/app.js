const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// MongoDB connection
// localhost => 127.0.0.1
mongoose.connect('mongodb://127.0.0.1:27017/', {
    dbName: "wsjp61"
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err.message));

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});