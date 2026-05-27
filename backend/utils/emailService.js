// const nodemailer = require('nodemailer');

// const createTransporter = () => {
//   return nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//     tls: {
//       rejectUnauthorized: false
//     }
//   });
// };

// const sendInquiryEmails = async (inquiryData) => {
//   const transporter = createTransporter();
//   const { name, companyName, phone, email, requirement, message } = inquiryData;

//   // 1. Notification Layout to VI Enterprises Desk
//   const adminMailOptions = {
//     from: `"VI Enterprises Web Portal" <${process.env.SMTP_USER}>`,
//     to: process.env.COMPANY_EMAIL,
//     subject: `🚨 NEW INDUSTRIAL INQUIRY: ${requirement} from ${companyName}`,
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; color: #1e293b;">
//         <h2 style="color: #1e3a8a; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-top: 0;">New Sales Lead Generated</h2>
//         <p>A prospective client has submitted an industrial inquiry via the website platform.</p>
//         <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
//           <tr style="background-color: #f8fafc;"><td style="padding: 10px; font-weight: bold; width: 35%;">Client Name:</td><td style="padding: 10px;">${name}</td></tr>
//           <tr><td style="padding: 10px; font-weight: bold;">Company:</td><td style="padding: 10px;">${companyName}</td></tr>
//           <tr style="background-color: #f8fafc;"><td style="padding: 10px; font-weight: bold;">Phone Number:</td><td style="padding: 10px;">${phone}</td></tr>
//           <tr><td style="padding: 10px; font-weight: bold;">Email Address:</td><td style="padding: 10px;">${email}</td></tr>
//           <tr style="background-color: #f8fafc;"><td style="padding: 10px; font-weight: bold;">Required Service:</td><td style="padding: 10px;"><strong>${requirement}</strong></td></tr>
//         </table>
//         <div style="background-color: #f1f5f9; padding: 16px; border-radius: 6px; border-left: 4px solid #1e3a8a;">
//           <h4 style="margin: 0 0 8px 0; color: #0f172a;">Message / Technical Specs:</h4>
//           <p style="margin: 0; line-height: 1.5; white-space: pre-line;">${message}</p>
//         </div>
//       </div>
//     `,
//   };

//   // 2. Premium Light Auto-Response Template for the Customer
//   const customerMailOptions = {
//     from: `"VI Enterprises" <${process.env.SMTP_USER}>`,
//     to: email,
//     subject: `Thank you for contacting VI Enterprises — Surface Finishing Experts`,
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; border-top: 4px solid #1e3a8a; padding: 32px; color: #334155; line-height: 1.6;">
//         <h3 style="color: #0f172a; margin-top: 0;">Hello ${name},</h3>
//         <p>Thank you for reaching out to <strong>VI Enterprises</strong>. We have successfully received your inquiry regarding <strong>${requirement}</strong> specifications for your organization, <strong>${companyName}</strong>.</p>
//         <p>With over 19 years of operational excellence in high-precision industrial plating and surface coatings, our engineering team evaluates requirements to ensure optimal corrosion protection and durability standards.</p>
//         <blockquote style="margin: 20px 0; padding-left: 16px; border-left: 3px solid #cbd5e1; font-style: italic; color: #64748b;">
//           "Our technical representative is evaluating your submission and will get in touch with you along with a detailed quote estimate within the next 24 business hours."
//         </blockquote>
//         <p style="margin-bottom: 24px;">If you have direct blueprints or high-priority changes, please feel free to call our executive team directly at +91 8408022773.</p>
//         <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
//         <p style="font-size: 13px; color: #94a3b8; margin: 0;"><strong>VI Enterprises — Industrial Plating & Surface Finishing</strong><br />
//         W-101, M.I.D.C Industrial Area, Hingna Rd, Nagpur, Maharashtra 441110<br />
//         Email: vienterprises101@gmail.com | Web: www.vienterprises.com</p>
//       </div>
//     `,
//   };

//   // Dispatch both asynchronously
//   await Promise.all([
//     transporter.sendMail(adminMailOptions),
//     transporter.sendMail(customerMailOptions),
//   ]);
// };

// module.exports = { sendInquiryEmails };
const { Resend } = require('resend');

// Initializes the Resend client using your secure dashboard environment key
const resend = new Resend(process.env.re_h1ymefxr_BrhCiFV7WUZDaQwpZ3c6sZWC);

const sendInquiryEmails = async (inquiryData) => {
  const { name, companyName, phone, email, requirement, message } = inquiryData;

  // 1. Notification Layout to the VI Enterprises Sales Desk
  const adminMailOptions = {
    // Note: Free Resend testing tiers must send from their authorized onboarding domain string
    from: 'VI Enterprises Web Portal <onboarding@resend.dev>',
    to: process.env.COMPANY_EMAIL || 'pacific2306@gmail.com',
    subject: `🚨 NEW INDUSTRIAL INQUIRY: ${requirement} from ${companyName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; color: #1e293b;">
        <h2 style="color: #1e3a8a; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-top: 0;">New Sales Lead Generated</h2>
        <p>A prospective client has submitted an industrial inquiry via the website platform.</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #f8fafc;"><td style="padding: 10px; font-weight: bold; width: 35%;">Client Name:</td><td style="padding: 10px;">${name}</td></tr>
          <tr><td style="padding: 10px; font-weight: bold;">Company:</td><td style="padding: 10px;">${companyName}</td></tr>
          <tr style="background-color: #f8fafc;"><td style="padding: 10px; font-weight: bold;">Phone Number:</td><td style="padding: 10px;">${phone}</td></tr>
          <tr><td style="padding: 10px; font-weight: bold;">Email Address:</td><td style="padding: 10px;">${email}</td></tr>
          <tr style="background-color: #f8fafc;"><td style="padding: 10px; font-weight: bold;">Required Service:</td><td style="padding: 10px; color: #2563eb;"><strong>${requirement}</strong></td></tr>
        </table>
        <div style="background-color: #f1f5f9; padding: 16px; border-radius: 6px; border-left: 4px solid #1e3a8a;">
          <h4 style="margin: 0 0 8px 0; color: #0f172a;">Message / Technical Specs:</h4>
          <p style="margin: 0; line-height: 1.5; white-space: pre-line;">${message}</p>
        </div>
      </div>
    `,
  };

  // 2. Premium Auto-Response Template for the Customer
  const customerMailOptions = {
    from: 'VI Enterprises <onboarding@resend.dev>',
    to: email,
    subject: `Thank you for contacting VI Enterprises — Surface Finishing Experts`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; border-top: 4px solid #1e3a8a; padding: 32px; color: #334155; line-height: 1.6;">
        <h3 style="color: #0f172a; margin-top: 0;">Hello ${name},</h3>
        <p>Thank you for reaching out to <strong>VI Enterprises</strong>. We have successfully received your inquiry regarding <strong>${requirement}</strong> specifications for your organization, <strong>${companyName}</strong>.</p>
        <p>With over 19 years of operational excellence in high-precision industrial plating and surface coatings, our engineering team evaluates requirements to ensure optimal corrosion protection and durability standards.</p>
        <blockquote style="margin: 20px 0; padding-left: 16px; border-left: 3px solid #cbd5e1; font-style: italic; color: #64748b;">
          "Our technical representative is evaluating your submission and will get in touch with you along with a detailed quote estimate within the next 24 business hours."
        </blockquote>
        <p style="margin-bottom: 24px;">If you have direct blueprints or high-priority changes, please feel free to call our executive team directly at +91 8408022773.</p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="font-size: 13px; color: #94a3b8; margin: 0;"><strong>VI Enterprises — Industrial Plating & Surface Finishing</strong><br />
        W-101, M.I.D.C Industrial Area, Hingna Rd, Nagpur, Maharashtra 441110<br />
        Email: vienterprises101@gmail.com | Web: www.vienterprises.com</p>
      </div>
    `,
  };

  // Dispatch both requests over HTTPS API channels concurrently
  await Promise.all([
    resend.emails.send(adminMailOptions),
    resend.emails.send(customerMailOptions),
  ]);
};

module.exports = { sendInquiryEmails };