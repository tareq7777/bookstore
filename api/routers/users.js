const bcrypt = require('bcrypt');

const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
var privateKey = "33fkfkfdokfk";

router.get('/', (req, res) => {
    User.getAllUser(res);
});

router.get('/:id', (req, res) => {
    let userId = parseInt(req.params.id);
    if (userId)
        User.getUserById(userId, res);
    else
        functions.response(res, -10);
});

router.post('/login', (req, res) => {
    User.getUserByUsername(req.body.username, (err, user) => {
        if (err) { res.status(500).json({ error: err }); }
        if (!user) { return res.status(401).json({ message: 'no user' }); }
        // console.log(user[0].password);
        // console.log(req.body.password);
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) { return res.status(401).json({ message: 'Auth failed1' }); }
            if (result) {
                const token = jwt.sign({ username: user.username, userId: user.id }, privateKey, { expiresIn: "1h" });
                return res.status(200).json({ message: 'Auth successful', access_token: token });
            }
            return res.status(401).json({ message: 'Auth failed2' });
        });
    });
});

router.post('/signup', (req, res) => {
    User.getUserByUsername(req.body.username, (err, result) => { // Check if the user is already exists
        // console.log(result);
        if (result.length > 0) return res.status(409).send({ message: 'Sorry, username already exists' });
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) { return res.status(500).json({ error: err }); }
            else {
                const user = {
                    id: 0, username: req.body.username, password: hash,
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

module.exports = router;
