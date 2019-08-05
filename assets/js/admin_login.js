
$(function(){
    // 点击登录
    $('.btn').on('click',function(){
        // 验证非空

        // 获取表单数据
        let data = $('.form-group').serialize();
        $.ajax({
            type : 'post',
            url : 'http://127.0.0.1:8080/getAccountInfo',
            data,
            success : function(res){
                console.log(res);
            }
        })
    })
})

/* 
    1.点击登录按钮
        1.1 先判断表单内容不为空,有空的提示用户填写
        1.2 获取表单内的账户和密码信息
    2.用获取的账户和密码信息与后台的数据库对比,看是否匹配
        (使用mysql的select查询数据表中的数据,let sql = SELECT * FROM users WHERE `account`='狗蛋',`password`='123456';)
        2.1 如果不匹配,提示用户名或者密码错误
        2.2 如果匹配,提示登录成功
            2.2.1 跳转到后台首页
 */