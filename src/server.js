const express = require('express')
const app = express()
const path=require('path')
const WebRoutes= require('../src/routes/web')
const configViewEngine= require('../src/config/viewEngine')

// if you want use file .env we can install library dotenv and init it
require('dotenv').config()
const port = process.env.PORT || 8000
const hostname=process.env.HOST_NAME
//config template ViewEngine
configViewEngine(app);
app.use('/',WebRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})



