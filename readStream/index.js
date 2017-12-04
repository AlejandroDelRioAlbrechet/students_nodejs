var fs = require('fs');
var readStream = fs.createReadStream('fileSample.txt');
// readStream.pipe(process.stdout);

var fileContent;
var i = 0;
readStream.on('data', function (chunk) {
  console.log('Chunk Received', i, chunk.toString('utf-8'));
  fileContent += chunk.toString('utf-8');
  i += 1;
}).on('end', function () {
  console.log('End Of stream');
});