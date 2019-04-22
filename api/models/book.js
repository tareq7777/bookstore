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

Book.getBooksById = (bookId, response) => {
    db.query("SELECT * FROM books WHERE id= ?", [bookId], (err, res) => {
        err ? functions.response(response, -99) : functions.response(response, 1, res);
    });
};
Book.deleteBooksById = (bookId, response) => {
    db.query("DELETE FROM books WHERE id= ?", [bookId], (err, res) => {
        err ? functions.response(response, -99) : functions.response(response, 1, res);
    });
};

Book.addNewBook = (book, response) => {
    db.query("INSERT INTO books VALUES (?,?,?,?,?,?)", [0, book.title, book.isbn, book.author, book.keywords, book.publisher], (err, res) => {
        err ? functions.response(response, -99) : functions.response(response, 1, null);
    });
};
Book.updateBook = (book, response) => {
    db.query("UPDATE books SET title = ? , isbn = ? , author = ? , keywords = ? , publisher = ? , WHERE id = ?", [book.title, book.isbn, book.author, book.keywords, book.publisher, book.id], (err, res) => {
        err ? functions.response(response, -99) : functions.response(response, 1, null);
    });
};

module.exports = Book;
