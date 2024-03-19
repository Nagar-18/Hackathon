const { default: mongoose } = require("mongoose");

const validator = require("validator");

const { default: isEmail } = require("validator/lib/isEmail");

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 3,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 3,
  },
  adharno: {
    type: Number,
    required: true,
    minlength: 12,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email is already Present"],
    validate(value) {
      if (!isEmail(value)) throw new Error("invalid  Email");
    },
  },
  password: {
    type: String,
    required: true,
  },
  walletaddress: {
    type: String,
    unique: [true, "address is already Present"],
    required: true,
  },
});
const User = new mongoose.model("userinfo", userSchema);
module.exports = User;
