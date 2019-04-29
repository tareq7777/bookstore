const bcrypt = require('bcrypt');

const User = (user) => {
    this.id = user.id;
    this.username = user.username;
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

User.getUsersAuthor = (userId, response) => {
    db.pool.getConnection(function (dbErr, connection) {
        if (dbErr) {
            functions.response(response, -99);
        } else {
            connection.query("SELECT notify_author FROM users where id=?", [userId], (err, res) => {
                if(err) {
                    functions.response(response, -99)
                } else {
                    console.log(res)
                    functions.response(response, 1, res) 
                };
            });
            connection.release();
        }
    });
};

User.setUsersAuthor = (userId, author, response) => {
    db.pool.getConnection(function (dbErr, connection) {
        if (dbErr) {
            functions.response(response, -99);
        } else {
            connection.query("Update users set notify_author=? where id=?", [author, userId], (err, res) => {
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

User.getUserByUsername = (username, response) => {
    db.pool.getConnection(function (dbErr, connection) {
        if (dbErr) {
            functions.response(response, -99);
        } else {
            connection.query("SELECT * FROM users WHERE username= ?", [username], (err, res) => {
                response(err, res);
            });
            connection.release();
        }
    });
}

User.createUser = (newUser, response) => {
    db.pool.getConnection(function (dbErr, connection) {
        if (dbErr) {
            // functions.response(response, -99);
            response(-99)
        } else {
            connection.query("INSERT INTO `users` (`username`, `password`) VALUES (?,?)", [newUser.username, newUser.password], (err, res) => {
                // err ? response(response, -99) : response(response, 1, res);
                response(err, res)
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
            connection.query("SELECT `password` FROM `users` WHERE `username` = ?", [userData.username], (err, res) => {
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
