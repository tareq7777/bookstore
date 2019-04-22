const sql = require('../db');

var Book = (book) => {
    this.id = book.id;
    this.name = book.name;
};

Book.getAllBooks = (result) => {
    sql.query("SELECT * FROM books", (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Book.getBooksById = (bookId, result) => {
    sql.query("SELECT * FROM books WHERE id=" + bookId, (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

module.exports = Book;