require('dotenv').config();
const express = require('express');
 const app = express();
const router = require('./router/auth-router')
 const port = 5000;
const connectDb = require('./utils/db')
 app.use (express.json())


app.use("/", router);

connectDb().then(()=>{

   app.listen(port, () => {
      console.log('App listening on port 3000!');
   });
})