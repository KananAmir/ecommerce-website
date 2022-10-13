// Start
const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const app = express();
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://elnurxoxo:PYPecommerce123@ecommerce.oetj6cu.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

//DB TABLE
const userSchema = new Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  address: {
    type: String,
  },
  username: {
    type: String,
    required: [true, "Username required"]
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "Email required"],
  },
  password: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

//GETALL
app.get("/users", (req, res) => {
  User.find({}, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(500).json(err);
    }
  });
});

//GET id
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  User.findById(id, (err, doc) => {
    if (!err) {
      if (doc) res.json(doc);
      else res.status(404).json({ message: "not found!" });
    } else {
      res.status(500).json(err);
    }
  });
});

//Post
app.post("/users", body("email").isEmail(), (req, res) => {
  const { name, surname, email, password, date, username } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: "error" });
  }

  var category = new User({
    name,
    surname,
    email,
    address,
    password,
    username,
    date,
  });
  category.save();
  res.send("success!");
});

//Delete
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id, (err) => {
    if (!err) res.json({ message: "success!" });
    else res.status(500).json(err);
  });
});

// Update
app.patch("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndUpdate(id, req.body);
  res.status(200).json(user);
});

app.listen(3020, () => {
  console.log("Server is running!!");
});