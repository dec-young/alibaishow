$(function () {
    // 鼠标点击登录按钮
    $('.btnLogin').on('click', function () {
        // 发送ajax请求(使用jquery的方法)
        $.ajax({
            type: 'post',
            url: '/login',
            dataType: 'json',
            data: $('form').serialize(),
            success: function(res){
                console.log(res)
                if(res.code == 400){
                    $('.alert-danger > span').text(res.msg);
                    $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500);
                } else {
                    location.href = '/admin';
                }
            }
        })
    })
})