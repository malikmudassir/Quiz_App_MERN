const express = require("express");
const { questions } = require("../controllers/questionController");
const router = express.Router();

// Questions route
router.get("/questions", questions);

module.exports = router;
