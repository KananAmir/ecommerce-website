const express = require('express')
const cors = require('cors')
const connectDb = require('./app/config/database')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(__dirname + '/public'))
connectDb()

const cookieSession = require("cookie-session");

app.use(
  cookieSession({
    name: "elnurxoxo",
    secret: "SECRET_KEY",
    httpOnly: true,
  })
);

//routes
const categoryRouter = require('./app/routes/category.routes')
const brandRouter = require('./app/routes/brand.routes')
const productRouter = require('./app/routes/product.routes')
const orderItemRouter = require('./app/routes/orderItem.routes')
const orderRouter = require('./app/routes/order.routes')

app.use('/category', categoryRouter)
app.use('/brand', brandRouter)
app.use('/product', productRouter)
app.use('/orderitem', orderItemRouter)
app.use('/order', orderRouter)

require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)

app.listen(8080, () => {
  console.log(`server running on 8080 !`)
})
