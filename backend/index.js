const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware
app.use(helmet()); // Secure HTTP headers
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json()); // Body parser
app.use(morgan('dev')); // Logging

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use('/api/', limiter);

// Basic Route
app.get('/', (req, res) => {
    res.json({ message: 'Space Portfolio 2.0 API is running safely 🚀' });
});

const { contactSchema } = require('./utils/validation');

// Contact Route with Validation
app.post('/api/contact', (req, res) => {
    try {
        const validatedData = contactSchema.parse(req.body);
        console.log(`Received secure message from ${validatedData.name} (${validatedData.email})`);
        res.status(200).json({ success: true, message: 'Message received securely!' });
    } catch (error) {
        res.status(400).json({ success: false, errors: error.errors });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
