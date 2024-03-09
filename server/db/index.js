const mongoose = require('mongoose');
require('dotenv').config();

const Connection = mongoose.connect(process.env.MONGODB_URL)
.then(res=>console.log("Database Connected Successfully"))
.catch(err=>console.log(err));

module.exports = Connection;