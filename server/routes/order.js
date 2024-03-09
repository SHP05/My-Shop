const express = require('express');
const route = express.Router();
const SendMailOnOrder = require('../controllers/order');
const bP = require("body-parser");
const encoder = bP.urlencoded({ extended: true });


route.post('/checkout',encoder,SendMailOnOrder);

module.exports = route;