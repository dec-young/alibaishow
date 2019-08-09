$(function () {
    var pageNum = 1
    var pageSize = 3

    // 封装,获取数据渲染页面的方法
    function init(search) {
        $.ajax({
            url: '/getAllPost',
            type: 'get',
            // 分页查询需要参数
            data: {
                // pageNum: pageNum,
                // pageSize: pageSize,
                // ...search
                pageNum: pageNum,
                pageSize: pageSize,
                ...search
            },
            success: function (result) {
                console.log(result)
                // console.log(result.data.created)
                var html = template('postListTemp', result.data)
                // console.log(result.data)

                $('tbody').html(html)
                // 分页结构
                setPagenation(Math.ceil(result.data.total / pageSize))
            }
        })

    }
    //调用,生成页面
    init()

    // 实现分页功能
    function setPagenation(total) {
        // 初始化
        $('.pagination').bootstrapPaginator({
            // 配置
            bootstrapMajorVersion: 3,
            currentPage: pageNum, // 当前页码
            totalPages: total, // 总页数
            onPageClicked: function (event, originalEvent, type, page) {
                // page就是你当前想获取数据的页码
                // 修改全局pageNum
                pageNum = page
                // console.log(pageNum);
                // 重新调用加载数据的方法
                init()
            }
        })
        // console.log(total);
    }

    // 筛选功能
    // 1.动态生成下拉列表(获取分类列表的元素,拼接字符串,生成结构)
    $.ajax({
        type: 'get',
        url: '/getAllCate',
        dataType: 'json',
        success: function (res) {
            console.log(res);
            // 生成下拉列表结构
            let str = `<option value="all">所有分类</option>`
            for (let i = 0; i < res.data.length; i++) {
                str += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            // console.log(str);
            // 获取下拉列表,把分类丢进去
            $('.cateSelector').html(str);
        }
    })

    // 2.实现筛选功能
    $('.btn-search').on('click', function () {
        // 收集数据
        let obj = {
            cate: $('.cateSelector').val(),
            status: $('.statusSelector').val()
        }
        console.log(obj);
        // 调用函数发送ajax请求
        init(obj); // init(obj)打印出来后是undefined
    })

})