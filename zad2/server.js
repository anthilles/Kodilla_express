const express = require('express');
const app = express();

app.use(express.static('assets'));
app.get('/userform', function (req, res) {
    const response = {
        FullName: {
            first_name: req.query.first_name,
            last_name: req.query.last_name
        }
    };
    res.end(JSON.stringify(response));
});

const server = app.listen(3000, 'localhost', function() {
    const host = server.address().address;
    const port = server.address().port;

    console.log('serwer http://' + host + ':' + port);
});
