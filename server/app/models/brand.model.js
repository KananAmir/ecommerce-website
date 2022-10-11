const mongoose = require('mongoose')

const Brand = mongoose.model(
  'Brand',
  new mongoose.Schema({
    name: String,
    isDeleted: Boolean,
    image: String,
  }),
)

module.exports = { Brand }
