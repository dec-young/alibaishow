// 1.引入express模块,并创建服务器
const express = require('express');
// const fs = require('fs');
const router = require('./router.js');

// 2.创建服务器
const app = express();

// 3.添加端口监听ip地址
app.listen(8080, () => {
    console.log('服务器已开启,http://127.0.0.1:8080')
})

// 6.设置使用ejs模板引擎
app.set('view engine', 'ejs');
// 设置模板文件查询的默认目录
app.set('views', __dirname + '/views');

// 5.添加静态资源管理中间件
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));

app.use(router);