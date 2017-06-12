//modules
var bodyParser = require('body-parser');
var express = require('express');
var mysql = require('mysql');
var path = require('path');

//app
var app = express();

//Use middleware
app.use(bodyParser());

//laat ConsoleColor
var ConsoleColor = require('./ConsoleColor.js');
var ConfigGetter = require('./ConfigGetter.js');

/*
 //website egine
 app.set('view engine', 'ejs');
 
 //website folder name
 app.set('views', path.join(__dirname, 'website/html'));
 
 //Load css
 app.use('/css', express.static('website/css'));
 
 //Load javascript folder
 app.use('/js', express.static('website/js'));
 
 //post
 app.use('/post', require('./routers/post/PostIndex.js'));
 
 //app use get
 app.use('/api', require('./routers/get/api.js'));
 app.use('/', require('./routers/get/Index.js'));
 */

//api
app.use('/api', require('./api/api.js'));

//start server
app.listen(9080, function () {
    ConsoleColor.log("Server is aan");
});