const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// API Key
const API_KEY = 'd2575a55-86d0-47cc-9a8f-29970efa6d84';

// Contact Endpoint
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const authHeader = req.headers['authorization'];

    // Validate API Key
    if (authHeader !== `Bearer ${API_KEY}`) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    // Process the form data (e.g., save to database or send email)
    console.log('Received form data:', { name, email, message });

    // Simulate a successful response
    res.json({ success: true, message: 'Message received successfully!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
