const { OrderItem } = require('../models/orderItem.model')

const orderItemController = {
  getAll: (req, res) => {
    OrderItem.find({}, (err, docs) => {
      if (!err) {
        res.json(docs)
      } else {
        res.status(500).json(err)
      }
    })
  },
  getById: (req, res) => {
    let id = req.params.id

    OrderItem.findById(id, (err, docs) => {
      if (!err) {
        res.json(docs)
      } else {
        res.status(500).json(err)
      }
    })
  },
  add: (req, res) => {
    let orderItem = new OrderItem({
      productId: req.body.productId,
      count: req.body.count,
      totalPrice: req.body.totalPrice,
    })
    orderItem.save((err, docs) => {
      if (!err) {
        res.send(docs)
      }
    })
  },
  edit: (req, res) => {
    let id = req.params.id

    Order.findByIdAndUpdate(id, {
      productId: req.body.productId,
      count: req.body.count,
      totalPrice: req.body.totalPrice,
    })
  },
  delete: (req, res) => {
    let id = req.params.id

    OrderItem.findByIdAndDelete(id, (err, docs) => {
      if (!err) {
        res.json('OrderItem deleted !')
      }
    })
  },
}
module.exports = { orderItemController }
