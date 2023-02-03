const router = require("express").Router();
const JoinPin = require("../models/joinpins");

//create a pin
router.post("/", async (req, res) => {
  const newPin = new JoinPin(req.body);
  try {
    const savedPin = await newPin.save();
    res.status(200).json(savedPin);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all pins
router.get("/", async (req, res) => {
  try {
    const pins = await JoinPin.find();
    res.status(200).json(pins);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
