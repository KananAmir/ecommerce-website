const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: {
      type: String,
      required:  [true, "Email required"],
      trim: true,
      lowercase: true,
      unique: true,
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
    addDate: { type: Date, default: Date.now },
    // token:{
    //   type:String
    // },  
    // roles: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Role",
    //   },
    // ],
  })
);

module.exports = User;
