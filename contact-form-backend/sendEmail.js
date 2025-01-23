const nodemailer = require("nodemailer");

const sendEmail = async ({ name, email, message }) => {
  // Configure the transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: "lanishanicholas@gmail.com", // Replace with your email
      pass: "lwpb kwfk hpmz mxap", // Replace with your app password
    },
  });

  // Configure the email content
  const mailOptions = {
    from: `"Contact Form" <your-email@gmail.com>`, // Sender address
    to: "lanishanicholas@gmail.com", // Your email address to receive submissions
    subject: "New Contact Form Submission from my portfolio",
    text: `You have a new message from your contact form:

Name: ${name}
Email: ${email}
Message: ${message}
    `,
  };

  // Send the email
  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
