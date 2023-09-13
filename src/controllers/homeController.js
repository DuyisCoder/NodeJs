const connection= require('../config/database')
const homeController = (req,res)=>{
    let user=[];
    connection.query(
        'SELECT * FROM Users',
        function(err, results, fields) {
          user=results; // results contains rows returned by server
         console.log(user);
         res.send(JSON.stringify(user))
        }
      );
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