const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello Nomad !');
  console.log('hello route called');
});

server.listen(8080);
