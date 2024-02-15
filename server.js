// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());

// app.post('/send-email', (req, res) => {
//   const { name, email, message } = req.body;

//   // Create a transporter object using SMTP transport
//   let transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD
//     },
//     debug: true // Enable debugging
//   });

//   // Setup email data
//   let mailOptions = {
//     from: '"Contact Form" <your-email@gmail.com>',
//     to: 'your-email@gmail.com',
//     subject: 'New Message from Contact Form',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//   };

//   // Send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       return res.status(500).send('Error sending email');
//     }
//     console.log('Message sent: %s', info.messageId);
//     res.send('Email sent successfully');
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
