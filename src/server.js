const express = require('express')
const app = express()
const path=require('path')

// if you want use file .env we can install library dotenv and init it
require('dotenv').config()
const port = process.env.PORT || 8000
const hostname=process.env.HOST_NAME

// config template engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// config static files: so 'public' -> it will search from path public onwards
app.use(express.static(path.join(__dirname,'public')));

// Init routes
app.get('/',(req,res)=>{
    res.render('sample.ejs');
})
app.get('/admin',(req,res)=>{
    res.send('Is admin!!');
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})



