const mongoose = require('mongoose')
const connectionString = require('./env')

const connectDb = async () => {
  try {
    const db = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`MongoDB connected: ${db.connection.host}`)
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = connectDb
