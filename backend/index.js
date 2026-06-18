require("dotenv").config();
require("dotenv").config({ path: require("path").join(__dirname, "chat-bot", ".env") });

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const express = require("express");
const cors= require('cors');

const contactRoutes = require('./routes/contact.routes');
const chatRoutes = require('./chat-bot/routes/chatRoutes');
const sendEmail = require('./utils/sendEmail');
const { runFullSync } = require('./chat-bot/services/syncService');

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api/contact', contactRoutes);
app.use('/api', chatRoutes);

// app.get("/", (req, res) => {
// res.send("Backend Running");
//});

//test email route
{/*
app.get("/test-email", async (req, res) => {
  try {
    console.log("Sending email...");

    await sendEmail(
      process.env.EMAIL_USER,
      "SMTP Test",
      "<h2>Test Email</h2>"
    );

    console.log("Email sent");
    res.send("Email sent");
  } catch (error) {
    console.error("FULL ERROR:");
    console.error(error);
    res.status(500).send(error.message);
  }
});
*/}

const PORT = process.env.PORT || 8000;
 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});