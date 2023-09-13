const homeController = (req,res)=>{
    res.send("This is page Home!")
}
const adminController = (req,res)=>{
    res.send("This is page Admin");
}
const userController = (req,res)=>{
    res.send("This is page user")
}

module.exports={
    homeController,
    adminController,
    userController
}