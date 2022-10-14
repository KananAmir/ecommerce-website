const express = require('express')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(__dirname + '/public'))
const cookieSession = require("cookie-session");

app.use(
  cookieSession({
    name: "elnurxoxo",
    secret: "COOKIE_SECRET",
    httpOnly: true,
  })
);

const db = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(
    `mongodb+srv://elnurxoxo:PYPecommerce123@ecommerce.oetj6cu.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

//routes
app.use(require('./app/routes/category.routes'))
app.use(require('./app/routes/brand.routes'))
app.use(require('./app/routes/product.routes'))
app.use(require('./app/routes/auth.routes'))
app.use(require('./app/routes/user.routes'))
// app.use(require('./app/routes/order.routes'))
// app.use(require('./app/routes/orderItem.routes'))


app.listen(8080, () => {
  console.log(`server running on 8080 !`)
})

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
