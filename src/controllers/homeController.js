const connection=require('../config/database')
const homeController = (req,res)=>{
    return  res.render('home.ejs') ;
}
const adminController = (req,res)=>{
    res.send("This is page Admin");
}
const userController = (req,res)=>{
    res.send("This is page user")
}
const postCreateUser =(req,res)=>{
    let {email,name,city}=req.body;
    connection.query(
        `INSERT into Users(email,name,city)
        VALUES (?,?,?)`,[email,name,city],
        function(err,results){
            console.log(results);
        }
        
    )
    res.send("Tạo thành công!!")
}

module.exports={
    homeController,
    adminController,
    userController,
    postCreateUser,
}