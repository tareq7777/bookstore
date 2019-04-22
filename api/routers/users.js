const router = express.Router();
const User = require('../models/user');

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

router.get('/login', (req, res) => {
    let email = parseInt(req.body.email);
    let pwd = parseInt(req.body.pwd);
    if (email && pwd)
        User.logIn({email: email, password: pwd}, res);
    else
        functions.response(res, -10);
});

module.exports = router;
