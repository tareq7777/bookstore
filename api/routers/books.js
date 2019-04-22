const router = express.Router();
const Book = require('../models/book');

router.get('/', (req, res) => {
    Book.getAllBooks(res);
});

router.get('/:id', (req, res) => {
    let bookId = parseInt(req.params.id);
    if (bookId)
        Book.getBooksById(bookId, res);
    else
        functions.response(res, -10);
});
router.delete('/:id', (req, res) => {
    let bookId = parseInt(req.params.id);
    if (bookId)
        Book.deleteBooksById(bookId, res);
    else
        functions.response(res, -10);
});

router.post('/', (req, res) => {

    let title = req.body.title;
    let isbn = parseInt(req.body.isbn);
    let author = req.body.author;
    let keywords = req.body.keywords;
    let publisher = req.body.publisher;

    if (title && isbn && author && keywords && publisher) {
        const book = {
            title: title, isbn: isbn, keywords: keywords
            , publisher: publisher, author: author
        };
        Book.addNewBook(book, res);
    } else {
        functions.response(res, -10);
    }

});

router.put('/:id', (req, res) => {
    let bookId = parseInt(req.params.id);
    let title = req.body.title;
    let isbn = parseInt(req.body.isbn);
    let author = req.body.author;
    let keywords = req.body.keywords;
    let publisher = req.body.publisher;

    if (bookId && title && isbn && author && keywords && publisher) {
        const book = {
            id: bookId, title: title, isbn: isbn, keywords: keywords,
            publisher: publisher, author: author
        };
        Book.updateBook(book, res);
    } else {
        functions.response(res, -10);
    }

});

module.exports = router;
