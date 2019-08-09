// 根据当前页面的路由来显示对应元素的样式
$(function () {
    // 获取元素
    let menuPosts = $('#menu-posts');
    let menuSettings = $('#menu-settings');

    // 1.获取路由,这里获取路由的方法可能很多地方要使用,所以可以封装
    let index = location.href.indexOf('?');
    let routerName = '';
    // 2.判断是否有参数
    if (index == -1) {
        // 没有参数
        routerName = location.href.substring(location.href.lastIndexOf('/') + 1);
        // console.log(routerName);
    } else {
        // 有参数
        routerName = location.href.substring(location.href.lastIndexOf('/') + 1, location.href.indexOf('?'));
        // console.log(routerName);
    }

    if (routerName == 'posts' || routerName == 'post-add' || routerName == 'categories') {
        // 展开
        menuPosts.addClass('in').attr('aria-expanded', true);
    }
    if (routerName == 'nav-menus' || routerName == 'slides' || routerName == 'setting') {
        // 展开
        menuSettings.addClass('in').attr('aria-expanded', true);
    }

    //  判断路由为这些页面时,导航高亮
    if (routerName == 'admin' || routerName == 'comments' || routerName == 'users') {
        $('#' + routerName).addClass('active');
    }
})