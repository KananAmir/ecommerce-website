const { mongoose } = require('mongoose')
const { Order } = require('../models/order.model')

const orderController = {
  getAll: (req, res) => {
    Order.find({}, (err, docs) => {
      if (!err) {
        res.json(docs)
      } else {
        res.status(500).json(err)
      }
    })
  },
  getById: (req, res) => {
    let id = req.params.id

    Order.findById(id, (err, docs) => {
      if (!err) {
        res.json(docs)
      } else {
        res.status(500).json(err)
      }
    })
  },
  add: (req, res) => {
    let Order = new Order({
      userId: mongoose.Types.ObjectId(req.body.userId),
      orderItems: req.body.orderItems,
      TotalPrice: req.body.totalPrice,
    })
    Order.save((err, docs) => {
      if (!err) {
        res.send(`Order Created ! ${Order}`)
      }
    })
  },
  edit: (req, res) => {
    let id = red.params.id

    Order.findByIdAndUpdate(id, {
      orderItems: req.body.orderItems,
      totalPrice: req.body.TotalPrice,
      count: req.body.count,
      status: req.body.status,
    })
  },
  delete: (req, res) => {
    let id = req.params.id

    Order.findByIdAndDelete(id, (err, docs) => {
      if (!err) {
        res.json(docs)
      } else {
        res.status(500).json(err)
      }
    })
  },
}

module.exports = { orderController }
