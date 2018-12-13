
var fs = require('fs');

console.log('Executed before file read.');

var data = fs.readFileSync('text.csv','utf8');

console.log(data);

console.log('Executed after file read');
