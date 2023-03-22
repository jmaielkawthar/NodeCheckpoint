var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true,
    symbols: true
});

console.log(password);


var fs = require("fs");

fs.appendFile('passwords.txt', `${password}\n`, function(err) {
   if (err) {
      return console.error(err);
   }
   
   
   fs.readFile('passwords.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});