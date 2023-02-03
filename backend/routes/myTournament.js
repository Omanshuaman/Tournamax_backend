const express = require("express");
const { allMessages } = require("../controllers/chatControllers");

const router = express.Router();

router.route("/:chatId").get(allMessages);

module.exports = router;
