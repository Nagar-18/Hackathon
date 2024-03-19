const express = require("express");
const router = express.Router();
const User = require("./Schema");
const Wallet = require("./Wallet");

router.post("/createuser", async (req, res) => {
  console.log("helllo");
  console.log(req.body);
  try {
    const user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      adharno: req.body.adharno,
      walletaddress: req.body.walletaddress,
    });
    const userdata = await user.save();
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.send({ success: false });
  }
});

router.post("/loginuser", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && user.password === password) {
    res.json({
      login: true,
      firstname: user.firstname,
      name: user.lastname,
      email: user.email,
      password: user.password,
      adharno: user.adharno,
      walletaddress: user.walletaddress,
    });
  } else {
    res.json({
      login: false,
    });
  }
});
router.post("/createwallet", async (req, res) => {
  const { firstname, lastname, walletaddress } = req.body;

  try {
    const wallet = new Wallet({
      firstname: firstname,
      lastname: lastname,

      walletaddress: walletaddress,
    });
    const walletdata = await wallet.save();
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.send({ success: false });
  }
});

router.get("/getWallet", async (req, res) => {
  try {
    const data = await Wallet.find();
    console.log(data);

    res.json(data);
  } catch (error) {
    console.log(error);
    res.send({ success: false });
  }
});

module.exports = router;
