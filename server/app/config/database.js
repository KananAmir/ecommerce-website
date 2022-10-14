const mongoose = require('mongoose')
const connectionString = require('./env')
const Role = require("../../app/models/role.model");
const db = {}
db.mongoose = mongoose;
db.ROLES = ['user', 'admin'];

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}


const connectDb = async () => {
  try {
    const db = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`MongoDB connected successfully : ${db.connection.host}`)
    initial();
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = connectDb
