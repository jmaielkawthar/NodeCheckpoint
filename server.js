
// task 2
var http = require('http');
var fs = require('fs');
var url = require('url');
const hostname = 'localhost';
const port = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;  // set the repsonse status code to 200 "OK"
    res.setHeader('Content-Type', 'text/plain');  // set the response MIME type
    res.end('<h1>Hello Node!!!!</h1>\n');  // write and end the response
  });


  server.listen(port, hostname, () => {
    console.log(`HTTP Server listening at http://${hostname}:${port}/`);
  });