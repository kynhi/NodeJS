var fs = require('fs');

console.log("Executed before File Reading!");

var data = fs.readFileSync("./files/file.txt", "utf8");
console.log(data);

console.log("Executed after File Reading");
