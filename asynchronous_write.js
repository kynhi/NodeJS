var fs = require('fs');

console.log("Executed before File Reading!");

var contents = fs.writeFile("./files/file.txt", "Text to Write Asynchronously",
function(error){
  console.log("Written File");
 }
);

console.log("Executed after File Reading");
