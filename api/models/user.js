const sql = require('../../db');
const checkAuth = require('../auth/middleware/check-auth');

var User = (user) =>{
    this.id = user.id;
    this.email = user.email;
    this.password = user.password;
    this.first = user.first;
    this.last = user.last;
};

User.getAllUser = (result) =>{
    sql.query("SELECT * FROM users", (err, res) =>{
        if(err){
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

User.getUserByEmail = (email, result) =>{
    sql.query("SELECT * FROM users WHERE email='"+email+"'", (err, res) =>{
        if(err){
            result(err, null);
        }else{
            result(null, res);
        }
    });
}
User.createUser = (newUser, result) =>{
    sql.query("INSERT INTO `users` (`email`, `password`, `first`, `last`) VALUES ('"+newUser.email+"', '"+newUser.password+"', '"+newUser.firstName+"', '"+newUser.lastName+"');", (err, res) =>{
        if(err){
            result(err, null);
        }else{
            result(null, res);
        }
    });
}
User.logIn = (userData, result) =>{
    var password;
    sql.query("SELECT `password` FROM `users` WHERE `email` = "+userData.email+"", (err, res) =>{
        if(err){
            result(err, null);
        }else{
            password=res;
        }
    });
    bcrypt.compare(userData.password , password , function(err, res) {
        if(err){
            result(err, null);
        }else{
            result(null, res);
        }
        });

    
}

module.exports = User;