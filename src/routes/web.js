const {
    homeController,
    adminController,
    userController, 
    postCreateUser
} =require('../controllers/homeController');
const express=require('express');
const router=express.Router();

router.get('/',homeController);
router.get('/admin',adminController);
router.get('/user',userController);

router.post('/create-user', postCreateUser);

module.exports=router;