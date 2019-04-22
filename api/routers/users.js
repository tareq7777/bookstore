const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    User.getAllUser(res);
});

router.get('/:id', (req, res) => {
    let userId = parseInt(req.params.id);
    if (userId)
        User.getUserByEmail(res, userId);
    else
        functions.response(res, -10);
});

module.exports = router;
