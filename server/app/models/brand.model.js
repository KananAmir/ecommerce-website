const mongoose = require('mongoose')

const Brand = mongoose.model(
  'Category',
  new mongoose.Schema({
    name: String,
    isDeleted: Boolean,
    image: String,
  }),
)

module.exports = Brand
