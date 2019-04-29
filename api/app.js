const express = require('express');
const functions = require('./functions');
const db = require('./db');
const checkAuth = require("./auth/middleware/check-auth");

const app = express();
const port = 3000;


global.express = express;
global.functions = functions;
global.db = db;

app.use(express.json());

app.listen(port, _ => {
    console.log('Listing to port ' + port);
});

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
// });

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    // res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,Authorization");
    res.header("Access-Control-Allow-Headers", "*")

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH.DELETE.GET')
        return res.status(200).json({})
    }

    next()
})


app.use('/api/auth', require('./routers/auth.js'));
app.use('/api/users', checkAuth, require('./routers/users.js'));
// app.use('/api/books', require('./routers/books.js'));

app.use('/', (req, res) => {
    res.status(404).send('Not found');
});

module.exports = app;
module.exports = functions;
module.exports = db;
