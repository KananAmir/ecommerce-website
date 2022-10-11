const mongoose = require('mongoose')
const orderItem = require('./orderItem.model')
const Order = mongoose.model(
  'Order',
  new mongoose.Schema({
    trackId: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems: [orderItem],
    text: String,
  }),
)

module.exports = Order
