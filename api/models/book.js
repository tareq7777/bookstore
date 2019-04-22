const Book = (book) => {
    this.title = book.title;
    this.isbn = book.isbn;
    this.author = book.author;
    this.keywords = book.keywords;
    this.publisher = book.publisher;
};

Book.getAllBooks = (response) => {
    db.query("SELECT * FROM books", (err, res) => {
        err ? functions.response(response, -99) : functions.response(response, 1, res);
    });
};

Book.getBooksByisbn = (bookisbn, response) => {
    db.query("SELECT * FROM books WHERE isbn= ?", [bookId], (err, res) => {
        err ? functions.response(response, -99) : functions.response(response, 1, res);
    });
};

Book.addNewBook = (book, response) => {
    db.query("INSERT INTO books VALUES (?,?,?,?)", [book.title, book.isbn, book.author, book.keywords, book.publisher], (err, res) => {
        err ? functions.response(response, -99) : functions.response(response, 1, res);
    });
};

module.exports = Book;
