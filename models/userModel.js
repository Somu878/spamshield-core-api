const { default: mongoose } = require("mongoose");

const UserModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isSpam: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", UserModel);
