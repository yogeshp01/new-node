var yoga = require('express');
var app = yoga();

var abcd = require('cfenv');
var appEnv = abcd.getAppEnv(); 



app.listen(appEnv.port, '0.0.0.0', function() { 
  //console.log("server starting on " + appEnv.url);
});

app.get('/', function(req,res) {

    var x,n,p;
    x =10;
	n =15
    p = x + n;
    res.write("x =" + x +'\n' +"n =" + n +'\n' + "Value of p:"  + p +'\n');
    res.write('Hello World\n');;
    res.write("It's been a long day without you, my friend And I'll tell you all about it when I see you again\n");

   res.end('BYE');
	
})
//app.listen(8083);
