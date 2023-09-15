const connection=require('../config/database')
const {getAllUsers} = require('../services/CRUDservice')
const homeController = (req,res)=>{
    return  res.render('home.ejs') ;
}
const adminController = (req,res)=>{
    res.send("This is page Admin");
}
const userController = (req,res)=>{
    res.send("This is page user")
}
const postCreateUser = async (req, res) => {
        let { email, name, city } = req.body;
        let [results, fields] = await connection.query(
          `INSERT INTO Users(email, name, city) VALUES (?, ?, ?)`,
          [email, name, city]
        );
        res.send("Tạo thành công!!");
        console.log("Check kq:", results);
      
  };
  
const createaUser =(req,res)=>{
    res.render('create.ejs')
}
const infoUser = async (req,res)=>{
    let results= await getAllUsers();
    res.render('listUser.ejs',{listUser:results})
}

module.exports={
    homeController,
    adminController,
    userController,
    postCreateUser,
    createaUser,
    infoUser
}