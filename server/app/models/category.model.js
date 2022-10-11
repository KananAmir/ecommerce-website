const mongoose = require('mongoose')

const Category = mongoose.model(
  'Category',
  new mongoose.Schema({
    name: String,
    isDeleted: {
      type: Boolean,
      default: false,
    },
  }),
)

module.exports = { Category }
