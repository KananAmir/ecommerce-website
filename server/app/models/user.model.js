const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: String,
    username: String,
    name: String,
    surname: String,
    address: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  })
);

module.exports = User;
