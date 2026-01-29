const express = require("express");
const { addFeedback, getFeedback } = require("../controllers/feedbackController");

const router = express.Router();

router.post("/", addFeedback);
router.get("/", getFeedback);

module.exports = router;
