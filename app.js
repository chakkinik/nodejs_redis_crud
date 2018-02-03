


var express = require('express')
var app = express();
var route = require('./route');


//var route = express.Router();


app.use('/',route);


app.listen(3000);
