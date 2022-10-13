const mongoose = require('mongoose')

const Product = mongoose.model(
  'Product',
  new mongoose.Schema(
    {
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
      images: [
        {
          type: String,
          isPoster: {
            type: Boolean,
            default: false,
          },
          src: String,
        },
      ],
      isDeleted: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    },
  ),
)

module.exports = { Product }
