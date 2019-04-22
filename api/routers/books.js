const router = express.Router();
const Book = require('../models/book');

router.get('/', (req, res) => {
    Book.getAllBooks(res);
});

router.get('/:id', (req, res) => {
    let bookId = parseInt(req.params.id);
    if (bookId)
        Book.getBooksById(res, bookId);
    else
        functions.response(res, -10);
});

router.post('/', (req, res) => {

    const book = {
        id: 0, title: req.body.title, author: req.body.author, keywords: req.body.keywords
        , publisher: req.body.publisher
    };
    console.log('new user:', user);
    User.createUser(user, (err, result) => {
        if (err) {
            res.status(500).json({error: err});
        } else {
            result = user;

            res.status(201).json({message: 'User created successfully', createdUser: result});

        }
    });


})
// var courses = new Array;
//     courses=[
//         {id: 1,name: "php"},
//         {id: 2,name: "angular"},
//         {id: 3,name: "js"},
//         {id: 4,name: "css"},
//         {id: 5,name: "html"},
//     ]
// app.use(express.json());

// router.get('/',(req, res) => {
//     res.status(200).send(courses);
// });
// router.get('/:id',(req, res) => {
//     res.status(200).send("get with id:"+parseInt(req.params.id));
// });
// router.post('/',(req, res) => {

// });
module.exports = router;
