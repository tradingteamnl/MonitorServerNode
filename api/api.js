//load modules
var express = require('express');
var fs = require('fs');

//router
var app = express();

//laat filelocatie
var fileLocatie = fs.readFileSync("./temp/installerLocatie.txt");

//laat extra modules
var consoleBericht = require(fileLocatie+'/ConsoleColor.js');

//app.use
app.use('/v1', require(fileLocatie+'/api/apiV1.js'));

//stuur bericht naar de software in een terminal bericht plaatsen
consoleBericht.log("Alle api routers zijn geladen");

//zorg dat de module toegangkelijk is
module.exports = app;