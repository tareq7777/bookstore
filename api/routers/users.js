const bcrypt = require('bcrypt');

const router = express.Router();
const User = require('../models/user');


router.get('/', (req, res) => {
    User.getAllUser(res);
});

// router.get('/:id', (req, res) => {
//     let userId = parseInt(req.params.id);
//     if (userId)
//         User.getUserById(userId, res);
//     else
//         functions.response(res, -10);
// });

router.get('/myauthor', (req, res) => {
    console.log("myauthor")
    console.log("my user id is: ", req.userData.userId);
    if (req.userData) {
        User.getUsersAuthor(req.userData.userId, res);
    }else{
        functions.response(res, -13);
    }
});

router.post('/myauthor', (req, res) => {
    let author = req.body.author;
    if (author) {
        console.log("seting authro for user: ", req.userData.userId, author)
        User.setUsersAuthor(req.userData.userId, author, res);
    }else {
        functions.response(res, -10);
    }
        
});


module.exports = router;
