const router = require("express").Router();
const posterModel = require("../models/posterModel");

//create a pin
router.post("/", async (req, res) => {
  const newPoster = new posterModel(req.body);
  try {
    const savedPoster = await newPoster.save();
    res.status(200).json(savedPoster);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all pins
router.get("/", async (req, res) => {
  try {
    const pins = await posterModel.find();
    res.status(200).json(pins);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
