const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    tournamentName: {
      type: String,
      required: true,
    },
    organizerName: {
      type: String,
      required: true,
    },
    noOfTeam: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    startMatchDate: { type: Date, default: Date.now, required: true },
    endMatchDate: { type: Date, default: Date.now, required: true },
    time: {
      type: String,
      required: true,
    },
    entryFee: {
      type: Number,
      required: true,
    },
    prizeMoney: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pic: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    sports: {
      type: String,
      required: true,
    },
    groupLink: {
      type: String,
      required: true,
      default: "",
    },
    joinedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Pin", PinSchema);
