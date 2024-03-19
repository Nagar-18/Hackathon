const { default: mongoose } = require("mongoose");

const mongoDb = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/hackathon")
    .then(async () => {
      console.log("Connected To mongodb succesfully");
    });
};

module.exports = mongoDb;
