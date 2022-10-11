const mongoose = require('mongoose')

const Review = mongoose.model(
  'Review',
  new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    text: String,
  }),
)

module.exports = Review
