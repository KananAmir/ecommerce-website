const db = require("../models");
const User = db.user;

exports.getByUsername = (req, res) => {
  const { username } = req.params;
  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!user) {
      res.status(404).send({ message: "User not found." });
      return;
    }
    res.status(200).send({
      id: user._id,
      username: user.username,
      surname: user.surname,
      name: user.name,
      email: user.email,
    });
  });
};
