const connection=require('../config/database')
const express=require('express');
const app = express()


const {getAllUsers,getUserById, updateUser} = require('../services/CRUDservice')
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
const getUpdateUser =async (req,res)=>{
    const userId=req.params.id;
    const user= await getUserById(userId);
    return res.render('edit.ejs',{user:user})

}
const postUpdateUser = async (req, res) => {
    let { email, name, city, user } = req.body;
    
    // Gọi hàm updateUser để cập nhật thông tin người dùng (giả sử đây là hàm async)
    try {
        await updateUser(email, name, city, user);
        setTimeout(() => {
            res.redirect('/info-user');
        }, 3000);
    } catch (error) {
        console.error('Lỗi khi cập nhật:', error);
        res.status(500).send('Đã xảy ra lỗi khi cập nhật thông tin người dùng.');
    }
};

module.exports={
    homeController,
    adminController,
    userController,
    postCreateUser,
    createaUser,
    infoUser,
    getUpdateUser,
    postUpdateUser
}