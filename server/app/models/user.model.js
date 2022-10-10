const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: String,
    username: String,
    fullName: String,
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
