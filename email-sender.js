var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jmaielkawthar@gmail.com',
    pass: '************'
  }
});

var mailOptions = {
  from: 'jmaielkawthar@gmail.com',
  to: 'jmkawthar@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});