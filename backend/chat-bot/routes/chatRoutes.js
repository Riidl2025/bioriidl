// routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const { handleChat } = require('../controllers/chatcontroller');

// Define the POST endpoint for incoming chat messages
router.post('/chat', handleChat);

module.exports = router;