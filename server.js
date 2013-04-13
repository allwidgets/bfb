var express = require("express");
var app = express();
var port = process.env.PORT || 1337;


app.get('/', function (req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.send( "Hello World");
    });


app.listen(port);