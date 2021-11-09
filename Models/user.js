const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: [true, "Please Provide a Username"] },
  password: {
    type: String,
    required: [true, "Please Provide a Password"],
    minLength: [6, "Password must be at least 6 characters long"],
  },
});

module.exports = mongoose.model("User", UserSchema);
