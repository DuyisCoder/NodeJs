const express = require('express');
const path=require('path');
const app = express();

// if want use file env we can install dotenv and init it
require('dotenv').config();
const port = process.env.PORT || 9090 // guard port is underfined
const hostname=process.env.HOST_NAME

app.get('/',(req,res)=>{
    res.send("Hello ");
})

// Config template engine
app.set('views',path.join(__dirname,'views')) // tìm đường dẫn tới route views
app.set('view engine','ejs');


app.get('/admin',(req,res)=>{
    res.render('sample.ejs')
})
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})