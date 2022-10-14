const { User } = require('../models/user.model')


exports.allAccess = (req, res) => {
    res.status(200).send('Public Content.')
  }
  
  exports.userBoard = (req, res) => {
    res.status(200).send('User Content.')
  }
  
  exports.adminBoard = (req, res) => {
    res.status(200).send('admin Content.')
}
exports.getAll = (req,res) => {
  User.find({}, (err, docs) => {
    if (!err) {
      res.json(docs)
    } else {
      res.status(500).json(err)
    }
  })
}
exports.getById = (req,res) =>{
  let id = req.params.id

  User.findById(id, (err, doc) => {
    if (!err) {
      res.json(doc)
    }
  })
}

exports.delete = (req,res) =>{
  let id = req.params.id

  User.findByIdAndDelete(id, (err, doc) => {
    if (!err) {
      res.json('User Deleted !')
    }
  })
} 
