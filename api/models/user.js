const User = (user) => {
    this.id = user.id;
    this.email = user.email;
    this.password = user.password;
    this.first = user.first;
    this.last = user.last;
};

User.getAllUser = (response) => {
    sql.query("SELECT * FROM users", (err, res) => {
        err ? functions.response(response, -99) : functions.response(response, 1, res);
    });
};

User.getUserById = (id, response) => {
    sql.query("SELECT * FROM users WHERE id= ?", [id], (err, res) => {
        err ? functions.response(response, -99) : functions.response(response, 1, res);
    });
};

User.createUser = (newUser, response) => {
    sql.query("INSERT INTO `users` (`email`, `password`, `first`, `last`) VALUES (?,?,?,?)", [newUser.email, newUser.password, newUser.first, newUser.last], (err, res) => {
        err ? functions.response(response, -99) : functions.response(response, 1, res);
    });
};

User.logIn = (userData, result) => {
    var password;
    sql.query("SELECT `password` FROM `users` WHERE `email` = " + userData.email + "", (err, res) => {
        if (err) {
            result(err, null);
        } else {
            password = res;
        }
    });
    bcrypt.compare(userData.password, password, function (err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });


};

module.exports = User;
