const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CategoryRouter = require('./routers/category.router');
const ProductRouter = require('./routers/product.router');

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
}));

// MongoDB connection
// localhost => 127.0.0.1
mongoose.connect('mongodb://127.0.0.1:27017/', {
    dbName: "wsjp61"
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err.message));

app.use("/category", CategoryRouter);
app.use("/product", ProductRouter);
// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});