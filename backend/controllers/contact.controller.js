const Contact = require("../models/contact.model");
const sendEmail = require("../utils/sendEmail");

const submitContactForm = async (req, res) => {
  try {
    console.log(req.body);

    const { name, email } = req.body;

    const contact = await Contact.create(req.body);


    await sendEmail(
      email,
      "Thank You for Contacting Us",
      `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Thank You for Contacting Us</h2>

        <p>Dear ${name},</p>

        <p>
          Thank you for reaching out to us. We have successfully received
          your message and our team will review it shortly.
        </p>

        <p>
          We appreciate your interest and will get back to you as soon as possible.
        </p>

        <br>

        <p>Best Regards,</p>
        <p><strong>Bioriidl Team</strong></p>
      </div>
      `
    );

    res.status(201).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("Contact Form Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.error("Get Contacts Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  submitContactForm,
  getAllContacts,
};