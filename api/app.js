const express = require('express');
const app = express(); app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})
app.use('/api/books', require('./routers/books.js'));
app.use('/api/users', require('./routers/users.js'));
app.use('/', (req, res) => {
    res.status(404).send('incorrect url!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, _ => console.log('Listening to port ' + PORT));
module.exports = app;
