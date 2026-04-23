const Contact = require("../models/Contact");

/* ================= CREATE OR UPDATE CONTACT ================= */
exports.saveContact = async (req, res) => {
  try {
    const { phone, email, office, website } = req.body;

    let contact = await Contact.findOne();

    if (contact) {    
      contact.phone = phone;
      contact.email = email;
      contact.office = office;
      contact.website = website;
      await contact.save();
    } else {
      contact = await Contact.create({ phone, email, office, website });
    }

    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ================= GET CONTACT ================= */
exports.getContact = async (req, res) => {
  try {
    let contact = await Contact.findOne();

    // ✅ ensure empty object instead of null
    if (!contact) {
      contact = {
        phone: "",
        email: "",
        office: "",
        website: "",
      };
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};