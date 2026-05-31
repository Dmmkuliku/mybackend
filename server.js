const express = require('express');
const cors = require('cors');
const https = require('https'); // Required for the keep-alive script
const app = express();

// Enable CORS so Jinan's Vercel frontend can securely communicate with this server
app.use(cors());

// Express built-in middleware to parse incoming JSON payload streams
app.use(express.json());

// Local data persistence matrix layout (Array-based simulation for assignment requirements)
let messageDatabase = [];

// Base Health Check Channel Route
app.get('/', (req, res) => {
    res.status(200).json({
        status: "online",
        owner: "Jinan",
        assignment: "Portfolio Backend Ecosystem Connected"
    });
});

// API Route to Receive and Process Jinan's Front-end Contact Form Data
app.post('/api/contact', (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validation tracking logic parameters
        if (!name || !email || !message) {
            return res.status(400).json({ 
                error: "Invalid parameter format. Missing required data blocks." 
            });
        }

        // Create new log entry record
        const newRecord = {
            id: messageDatabase.length + 1,
            name: name,
            email: email,
            message: message,
            timestamp: new Date().toISOString()
        };

        // Push data row into storage array matrix
        messageDatabase.push(newRecord);
        console.log("New Message Script Logged Successfully:", newRecord);

        return res.status(201).json({
            success: true,
            message: "Transmission processed successfully. Data entry synchronized."
        });

    } catch (error) {
        console.error("Internal Server Error:", error);
        return res.status(500).json({ 
            error: "Internal computing architecture exception occurred." 
        });
    }
});

// Dynamically bind to assigned environment port or standard local system port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Jinan Backend running smoothly on assigned port architecture: ${PORT}`);
});

// Keep-alive ping routine for Render Free Tier
// Automatically pings Jinan's backend URL every 10 minutes to prevent it from going to sleep
setInterval(() => {
    https.get('https://jinan-portfolio-backend.onrender.com/', (res) => {
        console.log('Keep-alive baseline ping executed successfully.');
    }).on('error', (err) => {
        console.error('Keep-alive baseline ping error:', err.message);
    });
}, 600000); // 600,000 ms = 10 minutes
