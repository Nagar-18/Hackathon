const express = require("express");
const mongoDb = require("./DB/connection");
const cors = require("cors");
mongoDb();

const app = express();
const PORT = 5000;
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Reuested-With,Content-Type,Accept"
  );
  next();
});
app.use(express.json()); //MiddleWere
app.use(cors());

app.use("/api", require("./DB/router"));

app.get("/", (req, res) => {
  res.send("hello from backend ");
});
app.listen(PORT, () => {
  console.log("listing to port 5000");
});
