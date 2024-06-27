const express = require('express')
const cors = require('cors')
const connection = require('./db/index');
const UserRouter = require('./routes/user');
const OrderRouter = require('./routes/order');
const path = require("path");
const PORT = process.env.PORT;

const app = express()
app.use(express.json())
app.use(cors())
app.use('/',UserRouter);
app.use('/',OrderRouter);

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });

app.listen(PORT,()=>{ 
    console.log(`server is running.. on http://localhost:${PORT}`)
})
