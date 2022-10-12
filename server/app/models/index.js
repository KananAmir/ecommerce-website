const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose

db.user = require('./user.model')
db.role = require('./role.model')
db.product = require('./product.model')
db.review = require('./review.model')
db.order = require('./order.model')
db.orderItem = require('./orderItem.model')
db.brand = require('./brand.model')
db.category = require('./category.model')

//ROLES
db.ROLES = ['user', 'admin']

module.exports = db
