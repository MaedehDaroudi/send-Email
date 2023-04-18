var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "test1@gmail.com",
    pass: "123456",
  },
});

var mailOptions = {
  from: "test1@gmail.com",
  to: "test2@gmail.com",
  subject: "Sending Email using Node.js",
  text: "this is a test",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
