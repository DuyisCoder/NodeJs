const {homeController,adminController,userController} =require('../controllers/homeController');
const express=require('express');
const router=express.Router();

router.get('/',homeController);
router.get('/admin',adminController);
router.get('/user',userController);


module.exports=router;