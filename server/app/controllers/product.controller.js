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

  add: (req, res, next) => {
    const files = req.files
    const imageArr = []
    for (let i = 0; i < files.length; i++) {
      imageArr.push(files[i].path)
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
      categoryId: req.body.categoryId,
      brandId: req.body.brandId,
      images: imageArr,
    })
    product.save((err, docs) => {
      if (!err) {
        res.send(`Product Created ! ${docs}`)
      }
    })
  },
  edit: async (req, res) => {
    const editProduct = await Product.findOne({ _id: req.params.id })

    if (editProduct) {
      res.send(editProduct)
    } else {
      res.status(404).send({ message: 'product not found' })
    }
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
