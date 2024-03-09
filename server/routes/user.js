const express = require('express');
const route = express.Router();
const { Login , SignUp } = require('../controllers/user')

route.post('/login',Login);
route.post('/register',SignUp);

module.exports = route;