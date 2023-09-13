
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
    res.send("create new user")
    console.log('req.body:',req.body)
}

module.exports={
    homeController,
    adminController,
    userController,
    postCreateUser,
}