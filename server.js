var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/clever-newt', function(request, response){
    response.send('The fool didn\'t know it was impossible, so he did it');
});

app.listen(
    process.env.PORT || 4000,
    process.env.IP || 'localhost'
    );