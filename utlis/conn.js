const mysql = require('mysql');
// 创建链接
var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'data',
    // 将日期格式进行转换
    dateStrings:true
})
module.exports = conn;