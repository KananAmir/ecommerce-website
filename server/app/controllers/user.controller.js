const Users = require("../model/users");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = {
    getAllUsers: async function async(req, res) {
        try {
            Users.find({}, (err, docs) => {
                if (!err) {
                    res.json(docs);
                } else {
                    res.status(500).json(err);
                }
            });
        } catch (error) {
            res.json({
                success: false,
                message: error,
            });
        }
    },

    getOneUser: function (req, res) {
        try {
            const { id } = req.params;
            Users.findById(id, (err, doc) => {
                if (!err) {
                    if (doc) res.json(doc);
                    else res.status(404).json({ message: "Not found!" });
                } else {
                    res.status(500).json(err);
                }
            });
        } catch (error) {
            res.json({
                success: false,
                message: "Error",
            });
        }
    },

    addUser: async function (req, res) {
        try {
            const { name, surname, email, password, addDate } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: "error" });
            }
            var category = new User({
                name,
                surname,
                email,
                password,
                addDate,
            });
            category.save();
            res.send("Success!!");
        } catch (error) {
            res.json({
                success: false,
                message: error,
            });
        }
    },

    deleteUser: async function (req, res) {
        try {
            const { id } = req.params;
            User.findByIdAndDelete(id, (err) => {
                if (!err) res.json({ messagae: "Success!" });
                else res.status(500).json(err);
            });
        } catch (err) {
            res.json({
                success: false,
                message: "Error",
            });
        }
    },

    updateUser: async function (req, res) {
        try {
            const id = req.params.id;
            const user = await User.findByIdAndUpdate(id, req.body);
            res.status(200).json(user);
        } catch {
            res.json({
                success: false,
                message: "Error",
            });
        }
    },
};