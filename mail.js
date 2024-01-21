// server.js (Node.js with Express)
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit_form', (req, res) => {
   // Process form data
   const name = req.body.name;
   const email = req.body.email;
   const message = req.body.message;

   // Send email
   const transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
           user: 'your-email@gmail.com',
           pass: 'your-email-password'
       }
   });

   const mailOptions = {
       from: 'your-email@gmail.com',
       to: 'your-email@gmail.com', // Your email address
       subject: 'New Form Submission',
       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
       html: `
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>
       `
   };

   transporter.sendMail(mailOptions, (error, info) => {
       if (error) {
           return res.status(500).send(error.toString());
       }
       res.status(200).send('Form submitted successfully!');
   });
});

app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});
