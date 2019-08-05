// 利用express里面的方法配置路由
const express = require('express');
const router = express.Router();
// 引入返回页面的控制器
const pagesController = require('./controllers/pagesController.js');
const userController = require('./controllers/userController.js');

//简洁写法

router.get('/admin', pagesController.getAdminIndexPage)
    .get('/admin/categories', pagesController.getAdminCategorieslPage)
    .get('/admin/login', pagesController.getAdminLoginPage)
    .get('/admin/comments', pagesController.getAdminCommentsPage)
    .get('/admin/nav-menus', pagesController.getAdminNavmenusPage)
    .get('/admin/password-reset', pagesController.getAdminPasswordPage)
    .get('/admin/post-add', pagesController.getAdminPostaddPage)
    .get('/admin/posts', pagesController.getAdminPostsPage)
    .get('/admin/profie', pagesController.getAdminProfilePage)
    .get('/admin/setting', pagesController.getAdminSettingPage)
    .get('/admin/slides', pagesController.getAdminSlidesPage)
    .get('/admin/users', pagesController.getAdminUsersPage)

    // 验证登录信息
    .post('/login',userController.login)

    // 前台页面
    .get('/index', pagesController.getIndexPage)
    .get('/detail', pagesController.getDetailPage)
    .get('/list', pagesController.getListPage)

module.exports = router;

