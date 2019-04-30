const express = require('express');
const functions = require('./functions');
const db = require('./db');
const checkAuth = require("./auth/middleware/check-auth");

const app = express();
const port = 3000;


app.use(express.json());


const webpush = require("web-push")
const pbvk = 'BN8y70PiBGqdNusT7de67a7fM9jbp1NlVdIwyZpMhE0kmB87t9la2Tn7gsDBfSWYn8i8nx8ozT54H0lsarMa4IE'
const prvk = '9giOafG41dxhOuQvWktx9VO68vRvnx2bWlHqiLasewI'
webpush.setVapidDetails('mailto:idtareq@gmail.com', pbvk, prvk)
app.post('/subscribe/:username', (req, res) => {
    const subscription = req.body
    // console.log(subscription)
    // const payload = JSON.stringify({ title: "Push Test" })
    // webpush.sendNotification(subscription, payload).catch(err => console.error(err))
    console.log("subscribe: ", req.params.username)
    
})


global.express = express;
global.functions = functions;
global.db = db;



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
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET')
        return res.status(200).json({})
    }

    next()
})


app.use('/api/auth', require('./routers/auth.js'));
app.use('/api/users', checkAuth, require('./routers/users.js'));
app.use('/api/books', require('./routers/books.js'));

app.use('/', (req, res) => {
    res.status(404).send('Not found');
});

module.exports = app;
module.exports = functions;
module.exports = db;
