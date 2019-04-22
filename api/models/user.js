const User = (user) => {
    this.id = user.id;
    this.email = user.email;
    this.password = user.password;
    this.first = user.first;
    this.last = user.last;
};

User.getAllUser = (response) => {
    db.pool.getConnection(function (dbErr, connection) {
        if (dbErr) {
            functions.response(response, -99);
        } else {
            connection.query("SELECT * FROM users", (err, res) => {
                err ? functions.response(response, -99) : functions.response(response, 1, res);
            });
            connection.release();
        }
    });
};

User.getUserById = (id, response) => {
    db.pool.getConnection(function (dbErr, connection) {
        if (dbErr) {
            functions.response(response, -99);
        } else {
            connection.query("SELECT * FROM users WHERE id= ?", [id], (err, res) => {
                err ? functions.response(response, -99) : functions.response(response, 1, res);
            });
            connection.release();
        }
    });
};

User.createUser = (newUser, response) => {
    db.pool.getConnection(function (dbErr, connection) {
        if (dbErr) {
            functions.response(response, -99);
        } else {
            connection.query("INSERT INTO `users` (`email`, `password`, `first`, `last`) VALUES (?,?,?,?)", [newUser.email, newUser.password, newUser.first, newUser.last], (err, res) => {
                err ? functions.response(response, -99) : functions.response(response, 1, res);
            });
            connection.release();
        }
    });

};

User.logIn = (userData, response) => {
    db.pool.getConnection(function (dbErr, connection) {
        if (dbErr) {
            functions.response(response, -99);
        } else {
            var pwd = '';
            connection.query("SELECT `password` FROM `users` WHERE `email` = ?", [userData.email], (err, res) => {
                err ? functions.response(response, -99) : pwd = res;

            });
            bcrypt.compare(userData.password, pwd, function (err, res) {
                err ? functions.response(response, -99) : functions.response(response, 1, res);
            });
            connection.release();
        }
    });
};

module.exports = User;
