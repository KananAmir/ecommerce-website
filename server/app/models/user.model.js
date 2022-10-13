const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    name: String,
    surname: String,
    address: String,
    password:{
      type:String,
      required:true,
      minLength:[5,'Password should be minimum of 5 characters']
    },
    token:{
      type:String
    },  
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  })
);

module.exports = User;
