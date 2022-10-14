const config = require('../config/auth.config')
const db = require('../models')
const User = db.user
const Role = db.role

var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')


//Sign Up - Register
exports.signup = (req, res) => {
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    name: req.body.name || null,
    surname: req.body.surname || null,
    address: req.body.address || null,
    password: bcrypt.hashSync(req.body.password, 8),
  })

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err })
      return
    }

    user.save((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
  
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        user.roles = [role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
  
          res.send({ message: "User was registered successfully!" });
        });
      });
    });
  })
}

//Sign In - Log In
exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .populate('roles', '-__v')
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err })
        return
      }

      if (!user) {
        return res.status(404).send({ message: 'User Not found.' })
      }

      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password)

      if (!passwordIsValid) {
        return res.status(401).send({ message: 'Invalid Password!' })
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 259200, // 72 hours
      })

      var authorities = []

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push('ROLE_' + user.roles[i].name.toUpperCase())
      }

      req.session.token = token
      res.status(200).send({
        id: user._id,
        username: user.username,
        name: user.name,
        surname: user.surname,
        address: user.address,
        email: user.email,
        roles: authorities,
      })
    })
}

//Sign Out
exports.signout = async (req, res) => {
  try {
    req.session = null
    return res.status(200).send({ message: "You've been signed out!" })
  } catch (err) {
    this.next(err)
  }
}
