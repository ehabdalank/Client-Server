const express = require("express");
const app = express();
const UserModel = require("./moduls/Users");

const mongoose = require("mongoose");

const cors = require("cors");

app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://user123:Password123Ehab@cluster0.lrpsf49.mongodb.net/merntutorial?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/creatUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});

app.listen(3001, () => {
  console.log("server runs perfectly!");
});
