const { Aggregate, default: mongoose } = require('mongoose')
const { Product } = require('../models/product.model')
const { Category } = require('../models/category.model')
const { Brand } = require('../models/brand.model')
const productController = {
  getAll: (req, res) => {
    Product.find({}, (err, docs) => {
      if (!err) {
        res.json(docs)
      } else {
        res.status(500).json(err)
      }
    })
  },

  getById: (req, res) => {
    let id = req.params.id

    Product.findById(id, (err, doc) => {
      if (!err) {
        res.json(doc)
      }
    })
  },

  add: (req, res, next) => {
    const files = req.files
    console.log(files)
    const imageArr = []
    for (let i = 0; i < files.length; i++) {
      imageArr.push(files[i].filename)
    }
    if (!files) {
      const error = new Error('Please choose files')
      error.httpStatusCode = 400
      return next(error)
    }
    let product = new Product({
      name: req.body.name,
      desc: req.body.desc,
      price: req.body.price,
      discount: req.body.discount,
      stock: req.body.stock,
      categoryId: mongoose.Types.ObjectId(req.body.categoryId),
      category: Category.findById(req.body.categoryId),
      brandId: mongoose.Types.ObjectId(req.body.brandId),
      brand: Brand.findById(req.body.brandId),
      images: imageArr,
    })
    product.save((err, docs) => {
      if (!err) {
        res.send(`Product Created ! ${docs}`)
      }
    })
  },
  edit: async (req, res) => {
    let id = req.params.id
    const files = req.files
    const imageArr = []
    for (let i = 0; i < files.length; i++) {
      imageArr.push(files[i].filename)
    }
    Product.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        desc: req.body.desc,
        stock: req.body.stock,
        price: req.body.price,
        categoryId: req.body.categoryId,
        brandId: req.body.brandId,
        discount: req.body.discount,
        images: imageArr,
      },
      function (err, docs) {
        if (err) {
          console.log(err)
        } else {
          console.log(docs)
        }
        res.send('Prod Edited !')
      },
    )
  },
  delete: (req, res) => {
    let id = req.params.id
    Product.findByIdAndDelete(id, (err, doc) => {
      if (!err) {
        res.json('Product Deleted !')
      }
    })
  },
}
module.exports = { productController }
