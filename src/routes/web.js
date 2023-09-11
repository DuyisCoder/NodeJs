// Init routes
const express= require('express')
const router=express.Router();
const {homeController,adminController}= require('../controllers/homeController');

router.get('/',homeController)
router.get('/admin',adminController)

module.exports=router;