var fs = require('fs');
var wstream = fs.createWriteStream('myOutput.txt');
wstream.write('Hello world!\n');
wstream.write('Another line\n');
for(var i=0; i < 10000; i++) {
  wstream.write(Math.random().toString());
}
wstream.end();

wstream.on('finish', function () {
  console.log('File has been written');
});