// app.js

const express = require('express');
const path = require('path');
const app = express();

// Set the port for the server
const PORT = process.env.PORT || 3000;

// Serve static files (frontend) from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a new route '/message' to send a JSON response
app.get('/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

