//Load color module
var colors = require('colors');
 
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'white',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

function date(){
    var date = new Date();
    
    //maand
    if (date.getMonth() < 10){
        var maand = ""+date.getMonth()+1;
    } else {
        var maand = (date.getMonth())+11;
    }
    
    //dag
    if (date.getDate() < 10){
        var dag = "0"+date.getDate();
    } else {
        var dag = date.getDate();
    }
    
    //uur
    if (date.getHours()  < 10){
        var uur = "0"+date.getHours();
    } else {
        var uur = date.getHours();
    }
    
    //minut
    if (date.getMinutes()  < 10){
        var minut = "0"+date.getMinutes();
    } else {
        var minut = date.getMinutes();
    }
    
    //sec
    if (date.getSeconds()  < 10){
        var sec = "0"+date.getSeconds();
    } else {
        var sec = date.getSeconds();
    }    
    
    var str = "["+date.getFullYear() + "-" + maand + "-" + dag + " " +  uur + ":" + minut + ":" + sec+"]";
    return str;   
}

module.exports = {
    
    //error
    error: function(response){
        console.log(date().error +" [ERROR] "+response);
    },  
    //log
    log: function(response){
        console.log(date().info+ ' [INFO] '+response);
        //return date().info+ ' [INFO] '+response;
    },
    
    warn: function(response){
        console.log(date().warn+" [WARN] "+response);
    }
};