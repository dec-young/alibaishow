// 处理用户数据相关的增加删除修改和查询,这里提供数据给逻辑处理模块调用

const mysql = require('mysql');
// 使用sql处理数据库之前需要创建连接,连接了数据库才能操作数据库
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'data'
})


// 登录验证
exports.login = (email,callback)=>{
    //创建sql语句(先在上面引入sql模块),由于mysql对大小写不敏感,所以这里只能验证邮箱是否正确,密码验证交给上一层userController
    const sql = `SELECT * FROM users WHERE email = "${email}"`;
    // 执行mysql语句
    connection.query(sql,(err,results)=>{
        // 返回操作结果
        if(err){
            callback(err);
        } else {
            // results:查询返回一个个结果集,如果结果有数据,则只有一条数据
            callback(null,results[0]);
        }
    })
}