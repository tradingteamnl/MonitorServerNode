//load modules
//test
var fs = require('fs');
var ConsoleColor = require('./ConsoleColor.js');

//fileLocationInstall
exports.fileLocationInstall = function(){
    
    //save file location
    fs.writeFile("./temp/InstallerLocatie.txt", __dirname);

    //dir path
    var dir = __dirname+'/temp';

    //kijk of folder bestaat
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    
    //bericht in terminal
    console.log(ConsoleColor.log()+"File InstallerLocatie.txt aangemaakt.");
};
