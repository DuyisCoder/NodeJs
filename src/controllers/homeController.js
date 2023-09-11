
const homeController=(req,res)=>{
    //process data
    // models
    res.send('This is home page');
}
const adminController=(req,res)=>{
    res.send('This is admin page');
}


module.exports={
    homeController,
    adminController,

}