var fs = require('fs');

console.log("Executed before File Reading!");

var contents = fs.writeFileSync("./files/file.txt", "Text to Write Synchronously");

console.log("Executed after File Reading!");
