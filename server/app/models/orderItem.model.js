const mongoose = require('mongoose')

const OrderItem = mongoose.model(
  'OrderItem',
  new mongoose.Schema({
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    count: Number,
    totalPrice: Number,
  }),
)

module.exports = OrderItem
