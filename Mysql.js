//load modules
var mysql = require('mysql');
var fs = require('fs');

//laat config.json
var fileLocatie = fs.readFileSync('./temp/InstallerLocatie.txt');

//load codes
var ConsoleColor = require(fileLocatie + '/ConsoleColor.js');
var ConfigGetter = require(fileLocatie + '/ConfigGetter.js');

//connection
var MYSQLConnection = mysql.createConnection(ConfigGetter.MysqlCreatConnection());

//connectie maken met mysql
MYSQLConnection.connect(function (err) {
    if (err) {
        console.error(ConsoleColor.error() + err);
    } else {
        ConsoleColor.log("Connectie met mysql.");
    }
});

//Andere opties sql 
exports.MysqlAtother = function (sql, callback) {
    //voer insert query uit
    MYSQLConnection.query(sql, function (error, results, fields) {
        if (error) {
            console.log(error);
            return "false";
        } else {
            callback(null, "true");
        }
    });
};

//Select sql 
exports.MysqlSelect = function (sqlString, callback) {
    //voer insert query uit
    MYSQLConnection.query(sqlString, function (error, results, fields) {
        if (error) {
            console.log(error);
            return "false";
        } else {
            callback(null, JSON.stringify(results));
        }
    });
};

ConsoleColor.log("Mysql connecntie is opgestart.");