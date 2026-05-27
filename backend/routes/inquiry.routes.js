const express = require('express');
const router = express.Router();
const { createInquiry } = require('../controllers/inquiry.controller');
const { validateInquiry } = require('../middleware/validate.middleware');

// Root resource path mapping: POST /api/v1/inquiries
router.post('/', validateInquiry, createInquiry);

module.exports = router;