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
      type: String,
      required: true,
    },
    name3: {
      type: String,
      required: true,
    },
    name4: {
      type: String,
      required: true,
    },
    name5: {
      type: String,
      required: true,
    },
    name6: {
      type: String,
      required: true,
    },
    name7: {
      type: String,
      required: true,
    },
    name8: {
      type: String,
      required: true,
    },
    name9: {
      type: String,
      required: true,
    },
    name10: {
      type: String,
      required: true,
    },
    name11: {
      type: String,
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
