require('dotenv').config()
const express = require('express')
const app = express()
const path=require('path')
const WebRoutes= require('../src/routes/web')
const configViewEngine= require('../src/config/viewEngine')
const connection=require('./config/database')

// if you want use file .env we can install library dotenv and init it
const port = process.env.PORT || 8000
const hostname=process.env.HOST_NAME
//config template ViewEngine
configViewEngine(app);

// config req.body
app.use(express.json());
app.use(express.urlencoded({extended:true}));

  
app.use('/',WebRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
//   // simple query
//   connection.query(
//     'SELECT * FROM Users',
//     function(err, results, fields) {
//       console.log("kết quả:",results); // results contains rows returned by server
//     }
//   );

  

