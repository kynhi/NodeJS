var fs = require('fs');

console.log("Executed before File Reading!");

var data = fs.readFile("./files/file.txt", "utf8",function(err, data){
   console.log(data);
});

console.log("Executed after File Reading");
