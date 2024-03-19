const { default: mongoose } = require("mongoose");





const walletSchema = mongoose.Schema({
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
  walletaddress: {
    type: String,
    unique: [true, "address is already Present"],
    required: true,
  },
});
const Wallet = new mongoose.model("walletinfo", walletSchema);
module.exports = Wallet;
