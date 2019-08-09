const postsModel = require('../models/postsModel.js');
const moment = require('moment');

// 获取所有文章列表
exports.getAllPost = (req, res) => {
    // 
    var obj = req.query
    // 获取数据,调用方法
    postsModel.getAllPost(obj, (err, data) => {
        if (err) {
            res.json({
                code: 400,
                msg: '数据查询失败'
            });
        } else {
            // 转换
            // for (let i = 0; i < data.length; i++) {
            //     data[i].created = moment(data[i].created).format('YYYY-MM-DD HH-mm-ss');
            // }
            res.json({
                code:200,
                msg:'数据查询成功',
                data:data
            })
        }
    })
}