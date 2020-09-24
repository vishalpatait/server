const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true, minlength: 2, maxlength: 45 },
  email: {
    type: String,
    // unique: true,
    required: true,
    minlength: 5,
    maxlength: 45
  },
  message: {
    type: String,

    required: true,
    minlength: 2,
    maxlength: 100
  },
  
});

const User = mongoose.model("User", userSchema); //'User' is collection name

module.exports = User;
