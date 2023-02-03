const express = require("express");
const {
  renameGroup,
  renameGroupLink,
  renameTournament,
} = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/rename").put(renameGroup); //add protect if want to
router.route("/renamegroup").put(renameGroupLink); //add protect if want to
router.route("/renametournament").put(renameTournament); //add protect if want to

module.exports = router;
