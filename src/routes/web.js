const {
    homeController,
    adminController,
    userController, 
    postCreateUser,
    createaUser,
    infoUser,
    getUpdateUser
} =require('../controllers/homeController');
const express=require('express');
const router=express.Router();

router.get('/',homeController);
router.get('/admin',adminController);
router.get('/user',userController);
router.get('/create-user',createaUser)
router.get('/info-user',infoUser);

router.get('/update-user/:id',getUpdateUser);

router.post('/create-user', postCreateUser);

module.exports=router;