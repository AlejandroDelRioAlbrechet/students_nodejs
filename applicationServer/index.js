const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  fs.readFile('../writeStream/myOutput.txt', (err, data) => {
    if (err) throw err;
  
    res.end(data);
  });
});

server.listen(3000);

// const fs = require('fs');
// const server = require('http').createServer();

// server.on('request', (req, res) => {
//   const src = fs.createReadStream('../writeStream/myOutput.txt');
//   src.pipe(res);
// });

// server.listen(3000);