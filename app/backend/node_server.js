var express = require('express');
var app = express();
var port = 1337;

//Add headers
app.use(function (req, res, next) {
    //Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    //Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    //Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    //Pass to next layer of middleware
    next();
});

app.get('/', function(request, response){
    response.send("Hello world! (GET)");
});

app.post('/post', function(request, response) {
    response.send("Hello world! (POST)");
});

app.listen(port);
console.log('Node.js express server started on port %s', port);



