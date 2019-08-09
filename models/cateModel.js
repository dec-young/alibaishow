
const conn = require('../utlis/conn.js');
exports.getAllCate = (callback) => {
    // 创建sql语句
    const sql = 'SELECT * FROM categories'
    // 执行sql语句
    conn.query(sql, (err, data) => {
        if(err){
            callback(err);
        } else {
            callback(null,data);
        }
    })
}