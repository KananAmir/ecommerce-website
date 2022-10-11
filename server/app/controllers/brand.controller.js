const { Brand } = require('../models/brand.model')

const brandController = {
  getAll: (req, res) => {
    Brand.find({}, (err, docs) => {
      if (!err) {
        res.json(docs)
      } else {
        res.status(500).json(err)
      }
    })
  },

  getById: (req, res) => {
    let id = req.params.id

    Brand.findById(id, (err, doc) => {
      if (!err) {
        res.json(doc)
      }
    })
  },

  add: (req, res) => {
    let brand = new Brand({
      name: req.body.name,
    })

    brand.save((err, doc) => {
      if (!err) {
        res.json(doc)
      } else {
        res.status(500).json(err)
      }
    })
  },
  edit: (req, res) => {
    let id = req.params.id

    Brand.findByIdAndUpdate(id, { name: req.body.name }, function (err, docs) {
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

    Brand.findByIdAndDelete(id, (err, doc) => {
      if (!err) {
        res.json('Brand Deleted !')
      }
    })
  },
}

module.exports = {
  brandController,
}
