var chalk = require( "chalk" );
var path = require( "path" );

console.log( chalk.red.bold( "Using __dirname:" ) );
console.log(__dirname)
console.log(__filename)
var fileSystem = require( "fs" );
console.log( path.join( __dirname, "./files/file.txt" ) );
console.log( chalk.dim( fileSystem.readFileSync( path.join( __dirname, "./files/file.txt" ) ) ) );

console.log( "" );

console.log( chalk.red.bold( "Using require.resolve():" ) );
console.log( require.resolve( "./files/file.txt" ) );
console.log( chalk.dim( fileSystem.readFileSync( require.resolve( "./files/file.txt" ) ) ) );
