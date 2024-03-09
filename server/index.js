const express = require('express')
const cors = require('cors')
const connection = require('./db/index');
const UserRouter = require('./routes/user');
const OrderRouter = require('./routes/order');
const PORT = 3001 || process.env.PORT;

const app = express()
app.use(express.json())
app.use(cors())
app.use('/',UserRouter);
app.use('/',OrderRouter);

app.listen(PORT,()=>{ 
    console.log("server is running.. on http://localhost:3001/")
})
