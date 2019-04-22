const router = express.Router();
const Book = require('../models/book');

router.get('/', (req, res) => {
    Book.getAllBooks(res);
});

router.get('/:id', (req, res) => {
    let bookisbn = parseInt(req.params.id);
    if (bookisbn)
        Book.getBooksByisbn(res, bookisbn);
    else
        functions.response(res, -10);
});

router.post('/', (req, res) => {
    let title = req.body.title;
    let isbn = parseInt(req.body.isbn);
    let author = req.body.author;
    let keywords = req.body.keywords;
    let publisher = req.body.publisher;
    if( title  && isbn && author && keywords && publisher){
    const book = {
        id: 0, title: title, isbn: isbn, keywords: keywords
        , publisher: publisher , author: author
    };
    
    User.createUser(user, (err, result) => {
        if (err) {
            res.status(500).json({error: err});
        } else {
            result = user;

            res.status(201).json({message: 'User created successfully', createdUser: result});

        }
    });
    }else{
        functions.response(res, -10);
    }

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
