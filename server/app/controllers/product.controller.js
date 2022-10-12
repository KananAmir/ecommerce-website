const { Product } = require('../models/product.model')

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

  add: (req, res) => {
    let product = new Product({
      name: req.body.name,
      desc: req.body.desc,
      price: req.body.price,
      discount: req.body.discount,
      stock: req.body.stock,
      categoryId: req.body.categoryId,
      brandId: req.body.brandId,
      images: req.body.images,
    })
    res.send(product)
    product.save((err, doc) => {
      res.json(doc)
    })
  },
  edit: (req, res) => {
    let id = req.params.id

    Product.findByIdAndUpdate(id, { name: req.body.name }, function (
      err,
      docs,
    ) {
      if (err) {
        console.log(err)
      } else {
        console.log(docs)
      }
      res.send('Brand Edited !')
    })
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
