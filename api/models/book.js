const Book = (book) => {
    this.title = book.title;
    this.isbn = book.isbn;
    this.author = book.author;
    this.keywords = book.keywords;
    this.publisher = book.publisher;
};

Book.getAllBooks = (response) => {
    db.pool.getConnection(function (dbErr, connection) {
        if (dbErr) {
            functions.response(response, -99);
        } else {
            connection.query("SELECT * FROM books", (err, res) => {
                err ? functions.response(response, -99) : functions.response(response, 1, res);
            });
            connection.release();
        }
    });
};

Book.getBooksById = (bookId, response) => {
    db.pool.getConnection(function (dbErr, connection) {
        if (dbErr) {
            functions.response(response, -99);
        } else {
            connection.query("SELECT * FROM books WHERE id= ?", [bookId], (err, res) => {
                err ? functions.response(response, -99) : functions.response(response, 1, res);
            });
            connection.release();
        }
    });
};

Book.deleteBooksById = (bookId, response) => {
    db.pool.getConnection(function (dbErr, connection) {
        if (dbErr) {
            functions.response(response, -99);
        } else {
            connection.query("DELETE FROM books WHERE id= ?", [bookId], (err, res) => {
                err ? functions.response(response, -99) : functions.response(response, 1, res);
            });
            connection.release();
        }
    });
};

Book.addNewBook = (book, response) => {
    db.pool.getConnection(function (dbErr, connection) {
        if (dbErr) {
            functions.response(response, -99);
        } else {
            connection.query("INSERT INTO books VALUES (?,?,?,?,?,?)", [0, book.title, book.isbn, book.author, book.keywords, book.publisher], (err, res) => {
                err ? functions.response(response, -99) : functions.response(response, 1, null);
            });
            connection.release();
        }
    });
};

Book.updateBook = (book, response) => {
    db.pool.getConnection(function (dbErr, connection) {
        if (dbErr) {
            functions.response(response, -99);
        } else {
            connection.query("UPDATE books SET title = ? , isbn = ? , author = ? , keywords = ? , publisher = ? WHERE id = ?", [book.title, book.isbn, book.author, book.keywords, book.publisher, book.id], (err, res) => {
                console.log(err);
                err ? functions.response(response, -99) : functions.response(response, 1, null);
            });
            connection.release();
        }
    });
};

module.exports = Book;
