var nodemailer = require('nodemailer');

const SendMailOnOrder =  (req, res) => {
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
  })

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
      @myshop`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

};

module.exports = SendMailOnOrder;