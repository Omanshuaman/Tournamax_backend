const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const googleSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
});

googleSchema.plugin(findOrCreate);

module.exports = mongoose.model("Google", googleSchema);
