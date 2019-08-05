// 简洁写法

// 前台页面
exports.getDetailPage = (req, res) => {
    res.render('detail.ejs');
}
exports.getIndexPage = (req, res) => {
    res.render('index.ejs');
}
exports.getListPage = (req, res) => {
    res.render('list.ejs')
}

// 后台页面
exports.getAdminIndexPage = (req, res) => {
    res.render('admin/index.ejs');
}
exports.getAdminCategorieslPage = (req, res) => {
    res.render('admin/categories.ejs');
}
exports.getAdminLoginPage = (req, res) => {
    res.render('admin/login.ejs');
}
exports.getAdminCommentsPage = (req, res) => {
    res.render('admin/comments.ejs');
}
exports.getAdminNavmenusPage = (req, res) => {
    res.render('admin/nav-menus.ejs');
}
exports.getAdminPasswordPage = (req, res) => {
    res.render('admin/password-reset.ejs');
}
exports.getAdminPostaddPage = (req, res) => {
    res.render('admin/post-add.ejs');
}
exports.getAdminPostsPage = (req, res) => {
    res.render('admin/posts.ejs');
}
exports.getAdminProfilePage = (req, res) => {
    res.render('admin/profile.ejs');
}
exports.getAdminSettingPage = (req, res) => {
    res.render('admin/settings.ejs')
}
exports.getAdminSlidesPage = (req, res) => {
    res.render('./admin/slides.ejs');
}
exports.getAdminUsersPage = (req, res) => {
    res.render('admin/users.ejs');
}

