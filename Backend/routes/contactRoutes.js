const express = require("express");
const { sendContact } = require("../controllers/contactController");

const router = express.Router();

router.post("/", sendContact);

module.exports = router;
