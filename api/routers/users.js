
const express = require('express');
const app = express();
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
var privateKey = "33fkfkfdokfk";
const bcrypt = require('bcrypt');
router.get('/', (req, res) => {
    User.getAllUser((err, user) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json(user);
        }
    });
});

router.get('/:email', (req, res) => {
    // console.log(req.params);
    const email = req.params.email;
    User.getUserByEmail(email, (err, user) => {
        if (user.length > 0 ) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'No Valid entry' });
        }
    });
});

router.post('/signup', (req, res) => {
 
    User.getUserByEmail(req.body.email, (err, result) => { // Check if the user is already exists
        // console.log(result);
        if (result .length > 0) return res.status(409).send({ message: 'Sorry, email already exists' });
        bcrypt.hash(req.body.password, 10 , (err, hash) => {
            if (err) { return res.status(500).json({ error: err }); }
            else {
                const user = {
                    id: 0, email: req.body.email, password: hash,
                    firstName: req.body.firstName, lastName: req.body.lastName
                };
                console.log('new user:', user);
                User.createUser(user, (err, result) => {
                    if (err) { res.status(500).json({ error: err }); }
                    else {
                        result = user;
                        
                    res.status(201).json({ message: 'User created successfully', createdUser: result });

                    }
                });
            }
        });
    });
});
router.post('/login', (req, res) => {
    // Input Validation
    User.getUserByEmail(req.body.email, (err, user) => {
        if (err) { res.status(500).json({ error: err });}
        if (!user) { return res.status(401).json({ message: 'no user' }); }
        console.log(user[0].password);
        console.log(req.body.password);
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) { return res.status(401).json({ message: 'Auth failed1' }); }
            if (result) {
                const token = jwt.sign({ email: user.email, userId: user.id }, privateKey , { expiresIn: "1h" });
                return res.status(200).json({ message: 'Auth successful', access_token: token });
            }
            return res.status(401).json({ message: 'Auth failed2' });
        });
    });
});

module.exports = router;