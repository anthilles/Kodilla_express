const express = require('express');
const app = express();

app.use('/store', function(req, res, next){
    console.log('req /store');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/store', function (req, res) {
    res.send('Store');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('404')
});
