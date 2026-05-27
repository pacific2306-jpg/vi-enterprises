// ====== CRUCIAL WINDOWS NODE v24 DNS FIX ======
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); 
// ==============================================

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const inquiryRoutes = require('./routes/inquiry.routes.js');
const errorHandler = require('./middleware/error.middleware.js');

// Config path setup initialization
dotenv.config();

const app = express();

// Establish core database links
connectDB();

// CORS origin allowance setup mapping
// Locate this block inside backend/server.js:
app.use(
  cors({
    origin: '*', // Changing this to '*' allows any local port to submit forms during our testing phase
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

// Standard body serialization engines
app.use(express.json());

// Main App API Routes Deployment
app.use('/api/v1/inquiries', inquiryRoutes);

// Health check endpoint for deployment monitoring
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date() });
});

// Capture and pass off errors globally
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🌐 Server functioning securely in production scope on port ${PORT}`);
});