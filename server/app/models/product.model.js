const mongoose = require('mongoose')

const Product = mongoose.model(
  'Product',
  (ObjectId = Schema.ObjectId),
  new mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
    discount: Number,
    stock: Number,
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
    },
  }),
)

module.exports = Product
