//load modules
var express = require('express');
var fs = require('fs');
var mysql = require('mysql');

//router
var router = express.Router();

//laat filelocatie
var fileLocatie = fs.readFileSync("./temp/installerLocatie.txt");

//laat extra modules
var consoleBericht = require(fileLocatie+'/ConsoleColor.js');

//licentieCheck router
router.get('/licentie/:licentie', function(req, res){
    
    //vraag data op uit de parameters
    var licentie = req.params('licentie');
});






//plaats bericht in de console
consoleBericht.log("Api v1 is geladen");

//zorg dat de module toegangelijk is
module.exports = router;