const { Category } = require('../models/category.model')

const categoryController = {
  getAll: (req, res) => {
    Category.find({}, (err, docs) => {
      if (!err) {
        res.json(docs)
      } else {
        res.status(500).json(err)
      }
    })
  },

  getById: (req, res) => {
    let id = req.params.id

    Category.findById(id, (err, doc) => {
      if (!err) {
        res.json(doc)
      }
    })
  },

  add: (req, res) => {
    let category = new Category({
      name: req.body.name,
    })

    category.save((err, doc) => {
      if (!err) {
        res.json(doc)
      } else {
        res.status(500).json(err)
      }
    })
  },
  edit: (req, res) => {
    let id = req.params.id

    Category.findByIdAndUpdate(id, { name: req.body.name }, function (
      err,
      docs,
    ) {
      if (err) {
        console.log(err)
      } else {
        console.log(docs)
      }
      res.send('Category Edited !')
    })
  },
  delete: (req, res) => {
    let id = req.params.id

    Category.findByIdAndDelete(id, (err, doc) => {
      if (!err) {
        res.json('Category Deleted !')
      }
    })
  },
}

module.exports = {
  categoryController,
}
