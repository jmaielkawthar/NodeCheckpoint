// task 3
var fs = require('fs');

fs.appendFile('welcome.txt', 'Hello Node', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

   fs.readFile('hello.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });