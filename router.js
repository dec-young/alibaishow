// 利用express里面的方法配置路由
const express = require('express');
const router = express.Router();
// 引入返回页面的控制器
const pagesController = require('./controllers/pagesController.js'); 
// const userController = require('./controllers/userController');

// 后台静态页面
router.get('/admin', (req, res) => {
    pagesController.getAdminIndexPage(req,res);
})
router.get('/admin/categories', (req, res) => {
    pagesController.getAdminCategorieslPage(req,res);
})
router.get('/admin/login', (req, res) => {
    pagesController.getAdminLoginPage(req,res);
})

// 前台页面
router.get('index',(req,res)=>{
    pagesController.getIndexPage(req,res);
})
// router.get('detail',(req,res)=>{
//     pagesController.getDetailPage(req,res);
// })
// router.get('list',(req,res)=>{
//     pagesController.getListPage(req,res);
// })

module.exports = router;