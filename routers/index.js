const express = require('express');
const question = require("./question")
const auth = require("./auth")

const router = express.Router();


router.get('/questions', question)

router.get("/auth", auth)

module.exports = router