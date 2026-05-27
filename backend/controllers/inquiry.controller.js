const Inquiry = require('../models/Inquiry');
const { sendInquiryEmails } = require('../utils/emailService');

const createInquiry = async (req, res, next) => {
  try {
    const { name, companyName, phone, email, requirement, message } = req.body;

    // 1. Write transactional block record directly into cluster
    const newInquiry = await Inquiry.create({
      name,
      companyName,
      phone,
      email,
      requirement,
      message,
    });

    // 2. Execute background auto-notification routes via Nodemailer SMTP integration
    try {
      await sendInquiryEmails({ name, companyName, phone, email, requirement, message });
    } catch (emailError) {
      console.error(`⚠️ Database record committed, but mail pipeline errored: ${emailError.message}`);
      // Don't crash user response if email server is just running slowly
    }

    // 3. Issue success response object back to client side
    res.status(201).json({
      success: true,
      message: 'Inquiry registered and notifications routed successfully.',
      data: newInquiry,
    });
  } catch (error) {
    next(error); // Hand off database validations cleanly to centralized error middleware
  }
};

module.exports = { createInquiry };