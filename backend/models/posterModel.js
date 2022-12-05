const mongoose = require("mongoose");

const PosterSchema = new mongoose.Schema(
  {
    input: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Poster", PosterSchema);
