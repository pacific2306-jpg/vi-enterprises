const validateInquiry = (req, res, next) => {
  const { name, companyName, phone, email, requirement, message } = req.body;
  const missingFields = [];

  if (!name) missingFields.push('name');
  if (!companyName) missingFields.push('companyName');
  if (!phone) missingFields.push('phone');
  if (!email) missingFields.push('email');
  if (!requirement) missingFields.push('requirement');
  if (!message) missingFields.push('message');

  if (missingFields.length > 0) {
    return res.status(400).json({
      success: false,
      message: `Validation failed. Missing properties: [ ${missingFields.join(', ')} ]`,
    });
  }

  // Regex validations matching our Schema parameters
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email syntax provided.' });
  }

  next();
};

module.exports = { validateInquiry };