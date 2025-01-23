const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendEmail = require("./sendEmail");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allows requests from different origins
app.use(bodyParser.json()); // Parses incoming JSON data

// Routes
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).send("All fields are required.");
  }

  try {
    await sendEmail({ name, email, message });
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).send("Failed to send email. Please try again later.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
