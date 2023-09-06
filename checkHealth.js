require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const axios = require('axios');
//const CronJob = require("node-cron")
const cron = require('node-cron');
const CronJob = require('cron').CronJob;
const nodemailer = require('nodemailer');
const { sendMail } = require('./mail')
const url = process.env.URL;




cron.schedule('* * * * *', () => {

app.get("/",function(request,response){
  try {   
    // Test the database connection
  //  await sequelize.authenticate();
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully!!!!!!!!");
    }
  });
    response.status(200).json({ status: 'OK' });
  } catch (error) {
    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });
    response.status(500).json({ error: 'Database connection error' });}
//  response.send("Hello World!")
  })
  console.log('running a task every minute');
});
  app.listen(10000, function () {
  console.log("Started application on port %d", 10000)
  });
  let transporter = nodemailer.createTransport({
  service: 'gmail',
  providerauth: {user: process.env.emailFrom,},
  pass: process.env.gmailPassword,
  // auth: {
  //   user: process.env.emailFrom,
  //   pass: process.env.gmailPassword
  // },
  tls: {
    rejectUnauthorized: false
  }
});
// getTransporter  = () =>  {
//   return nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//           user: process.env.emailFrom,
//           pass: process.env.gmailPassword
//       }
//   });
// }
let mailOptions = {
  from:  process.env.emailFrom,
  to: "docnanoo2000@gmail.com",
  subject: 'Nodemailer Project',
  text: 'Hi from your nodemailer project'
};



// app.listen(PORT, () => console.log(`server is running  in ${process.env.NODE_ENV} on port ${PORT}`))
// // Cron job schedule (runs every minute)
// const job = new CronJob('* * * * *', () => {
//   const url = process.env.URL;

//   axios.get(url)
//     .then((response) => {
//       if (response.status === 200) {
//         console.log('Success: Status 200');
//       } else if (response.status === 500) {
//             sendMail({
//         to:  process.env.SUPER_ADMIN_email ,
//         subject: 'check health',
//         html: `<h2> mmmmmmmmmmmmm </h2>`
//       });
//       }
//     })
//     .catch((error) => {
//       console.error('Error:', error.message);
//       sendMail({
//         to:  process.env.SUPER_ADMIN_email ,
//         subject: 'check health',
//         html: `<h2> error </h2>`
//       });
//     });
// });

// // Function to send error email
// const sendErrorEmail = () => {
//   const transporter = nodemailer.createTransport({
//     // Configure your email transporter here (e.g., SMTP details)
//   });

//   const mailOptions = {
//     from: 'sender@example.com',
//     to: 'recipient1@example.com, recipient2@example.com',
//     subject: 'Error Alert: HTTP Request Status 500',
//     text: 'The HTTP request returned status 500. Please check the URL.',
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error.message);
//     } else {
//       console.log('Email sent:', info.response);
//     }
//   });
// };

// Start the cron job
//job.start();
