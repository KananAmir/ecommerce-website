const mongoose = require('mongoose')

const Category = mongoose.model(
  'Category',
  new mongoose.Schema({
    name: String,
    isDeleted: Boolean,
    image: String,
  }),
)

module.exports = Category
