const express = require('express')
const mongoos = require('mongoose')
const cors = require('cors')
const CustomerModel = require('./Customer')

const app = express()
app.use(express.json())
app.use(cors())

mongoos.connect("mongodb://localhost:27017/E-Commerce")

//nodemailer
var nodemailer = require('nodemailer');
const bP = require("body-parser");

const encoder = bP.urlencoded({ extended: true });

//set date
let date = new Date();
let currentDate = date.toLocaleDateString();


app.post("/checkout", encoder, function (req, res) {
  let email = req.body.email;
  let message = req.body.total;
  let msg = JSON.stringify(message);
  console.log(msg);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'shyam.pankhaniya5@gmail.com',
      pass: 'jhvgwlxhxezvhbol'    //ubvphiizcurlfxvg
    }
  });

  var mailOptions = {
    from: 'shyam.pankhaniya5@gmail.com',
    to: `${email}`,
    subject: 'Your Order Confirmation and Payment Details',
    text: `Dear ${email},
          I hope this message finds you well. We are delighted to confirm your recent order on our e-commerce platform. Thank you for choosing MY SHOP for your online shopping needs.
    
      Date of Order: ${currentDate}
      Here are the details of your order:
      Total Amount: Rs.${msg}🪙
      Payment Method: Cash on delivery

          Your payment for this order has been successfully processed, and the total amount of Rs${msg} has been charged to your Cash on Delivery. If you have any questions or concerns regarding your order, please do not hesitate to reach out to our customer support team at myshopcustomercare@gmail.com / 000 111 1234. We are here to assist you.

      Estimated Delivery Date: Within a Week
          
      You will receive a separate email with your tracking information once your order has been dispatched. Please allow some time for processing and shipping.
          
      Thank you for shopping with us. We appreciate your business and look forward to serving you again in the future. If you have any feedback or suggestions, we'd love to hear from you.
          
      Best regards,
          
      @sumanpankhaniya
      Order Mail
      MyShop.com
      [Website URL]
      [Contact Information]`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}
);

//nodemailer end

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  await CustomerModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ user })
          // res.json(user.email)
        }
        else
          res.json("Password is Incorrect")
      }
      else
        res.json("No User is Exist");
    })
})

app.post('/register', (req, res) => {
  CustomerModel.create(req.body)
    .then(custommers => res.json(custommers))
    .catch(err => res.json(err))
})


app.listen(3001, console.log("server is running.. on http://localhost:3001/"))
