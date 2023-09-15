const connection = require('../config/database')
const getAllUsers= async()=>{
    let [results,fields]= await connection.query(`SELECT * FROM Users`);
    return results;
}
const getUserById = async (userId)=>{
    let [results,fields]= await connection.query('SELECT * FROM Users where id=?',[userId]);
    let user= results && results.length >0 ?results[0]:{};
    return user;
}
const updateUser = async(email,name,city,user)=>{
    let [results, fields] = await connection.query(
        `
         UPDATE Users
         SET email=?,name=?,city=?
         where id=?
        `,
        [email, name, city,user]
      );
}
module.exports={
    getAllUsers,getUserById,updateUser
}