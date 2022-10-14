const mongoose = require('mongoose')
const { ORDER_STATUS } = require('../constants/order.status')
const Order = mongoose.model(
  'Order',
  new mongoose.Schema(
    {
      orderItems: [
        {
          name: { type: String, required: true },
          count: { type: Number, required: true },
          price: { type: Number, required: true },
        },
      ],
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      totalPrice: {
        type: Number,
        default: 0,
      },
      Status: {
        type: String,
        default: ORDER_STATUS[0],
      },
    },
    {
      timestamps: true,
    },
  ),
)
module.exports = Order
