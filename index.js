// index.js
const express = require('express');
const bodyParser = require('body-parser');
const tasksRouter = require('./Route/ApiRoute.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Use tasks routes
app.use('/api', tasksRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
