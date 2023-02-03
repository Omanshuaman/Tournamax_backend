const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    name1: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    name2: {
      type: Number,
      required: true,
    },
    name3: {
      type: Number,
      required: true,
    },
    name4: {
      type: Number,
      required: true,
    },
    joinedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pinId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pin",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JoinPin", PinSchema);
