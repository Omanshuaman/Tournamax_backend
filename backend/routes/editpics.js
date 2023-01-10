const express = require("express");
const { renameGroup } = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/rename").put(renameGroup); //add protect if want to

module.exports = router;
