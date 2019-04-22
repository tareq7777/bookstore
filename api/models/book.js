const Book = (book) => {
    this.id = book.id;
    this.name = book.name;
};

Book.getAllBooks = (response) => {
    db.query("SELECT * FROM books", (err, res) => {
        err ? functions.response(response, -99) : functions.response(response, 1, res);
    });
};

Book.getBooksById = (bookId, response) => {
    db.query("SELECT * FROM books WHERE id= ?", [bookId], (err, res) => {
        err ? functions.response(response, -99) : functions.response(response, 1, res);
    });
};

module.exports = Book;
