const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your full name'],
      trim: true,
    },
    companyName: {
      type: String,
      required: [true, 'Please provide your company name'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Please provide a valid contact number'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide a valid email address'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email address',
      ],
    },
    requirement: {
      type: String,
      required: [true, 'Please select a service requirement'],
      enum: ['Zinc Plating', 'Nickel Plating', 'Copper Plating', 'Chrome Plating', 'Surface Finishing', 'Corrosion Protection'],
    },
    message: {
      type: String,
      required: [true, 'Please include your detailed specification requirements'],
      maxLength: [2000, 'Message cannot exceed 2000 characters'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Inquiry', InquirySchema);