// 处理用户登录逻辑
const userModel = require('../models/userModel.js');

// 定义login方法并暴露供路由调用
exports.login = (req,res)=>{
    // 接收参数
    var obj = req.body;
    // console.log(obj);
    // 从数据模型层接收回数据,在这里处理
    userModel.login(obj.email,(err,data)=>{
        // 根据数据表处理数据后的结果来判断
        if(err){
            res.json({code:400,msg:'服务器异常'})
        } else {
            // 判断有没有查到数据集
            if(data){
                // 如果有数据,再判断密码是否正确
                if(data.password == obj.password){
                    // 用session写入登录状态
                    req.session.isLogin = 'true';
                    // 将当前对象存储到session
                    req.session.currentUser = data;
                    // 返回登录成功
                    res.end(JSON.stringify({code:200,msg:'登陆成功'}));
                } else {
                    // 如果数据库的密码如输入的密码不一致,返回密码错误
                    res.json({code:400,msg:'密码输入错误'});
                }
            } else {
                // 没有查到数据集,返回邮箱错误
                res.json({code:400,msg:'邮箱输入错误'})
            }
        }
    })
}