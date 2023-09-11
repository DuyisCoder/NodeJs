const path=require('path');
const express= require('express');

function configViewEngine(app){
        // config template engine
    app.set('views',path.join('./src','views'));
    app.set('view engine','ejs');
    // config static files: so 'public' -> it will search from path public onwards
    app.use(express.static(path.join('./src','public')));
 
}
module.exports = configViewEngine;