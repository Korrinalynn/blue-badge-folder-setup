const router = require("express").Router();
const User = require("../db").import("../models/user");
//Create a new endpoint : /create
//the endpoint is going to be a post request
//have an object that matches the model of UserTable (email/password).
//let sequelize create a new record in the database
router.post('/create', function (req, res) {
    User.create({
        email: req.body.user.email,
        password: req.body.user.password,
    })
        .then(function (user) {
            let responseObject = {
                user: user,
            };
            res.json(responseObject);
        })
        .catch(function (err) {
            res.status(500).json({ error: err })
        });
});

//create a new endpoint : /login
//the endpoint is going to be a post request
//build a query statement (hard code in a user's email that exists in your database)
//use findOne
//let sequelize return a success
//if we find one return user info and if user doesn't exist return "user does not exist"

router.post('/login', function (req, res) {
    User.findOne({ where: { email: req.body.user.email } })
        .then(function loginSuccess(user) {
            if (user) {
                res.status(200).json({ user: user });
            } else {
                res.send("User not found.")
            }
        }
    ).catch(function (err) {
        res.status(500).json({ error: err });
    });
});

module.exports = router;