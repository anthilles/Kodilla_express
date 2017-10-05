const express = require('express');
const app = express();

app.set('view engine', 'pug'); // będą widoki z pug
app.set('views','./views'); // widoki będą trzymane w /views

app.use('/store', function(req, res, next){
    console.log('req /store');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/first-view', function (req, res){
    res.render('first-view');
})

app.get('/store', function (req, res) {
    res.send('Store');
});

app.get('/dynamic-view', function(req, res){
    res.render('dynamic', {
        name: "Moja dynamiczna strona",
        url: "http://www.google.com",
        user:
        { name: "Johnny", age: "20" }
    });
});

app.get('/auth/google', function(req, res){
    res.send('zalogowany');
})

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('404')
});
