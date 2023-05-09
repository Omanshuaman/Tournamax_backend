const mongoose = require("mongoose");

const PosterSchema = new mongoose.Schema(
  {
    input: {
      type: String,
    },
    pics: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Poster", PosterSchema);
