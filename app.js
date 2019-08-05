// 1.引入express模块,并创建服务器
const express = require('express');
// const fs = require('fs');
const router = require('./router.js');
const bodyParser = require('body-parser');
// npm install express-session -S
//导入express-session 中间件插件
const session = require('express-session')
// 启用 session 中间件


// 2.创建服务器
const app = express();

// 3.添加端口监听ip地址
app.listen(8080, () => {
    console.log('服务器已开启,http://127.0.0.1:8080')
})
// app.listen(8081,()=>{
//     console.log('服务器已开启,http://127.0.0.1:8081')
// })

// 6.设置使用ejs模板引擎
app.set('view engine', 'ejs');
// 设置模板文件查询的默认目录
app.set('views', __dirname + '/views');

// bodyparser是nodejs里面的第三方模块,专门用于处理post请求
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// 5.添加静态资源管理中间件
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));

app.use(session({
    secret: 'keyboard cat', // 相当于是一个加密密钥，值可以是任意字符串
    resave: false, // 强制session保存到session store中
    saveUninitialized: false // 强制没有“初始化”的session保存到storage中
}))

// 全局中间件
app.use(function (req, res, next) {
    // 有三类页面不需要登录
    // 1.登录状态
    // 2.登陆页面
    // 3.其他前台不需要登录的页面
    if (req.session.isLogin && req.session.isLogin == 'true' || req.url == '/admin/login' || req.url.indexOf('/admin') == -1) { // indexOf()可以返回某个特定的字符串值在某个字符串中首次出现的位置,返回的值是一个索引,如果这个索引值为-1,则说明这个字符串值没有找到
        next()
    } else {
        // redirect
        res.redirect('/admin/login');
    }

})
app.use(router);