// 前台页面
function getDetailPage(req, res) {
    res.render('detali.ejs');
}

function getIndexPage(req, res) {
    res.render('index.ejs');
}

function getListPage(req, res) {
    res.render('list.ejs')
}
// 后台页面
function getAdminIndexPage(req, res) {
    res.render('admin/index.ejs');
}

function getAdminCategorieslPage(req, res) {
    res.render('admin/categories.ejs');
}

function getAdminLoginPage(req, res) {
    res.render('admin/login.ejs')
}

const pagesController = {
    getIndexPage,
    getDetailPage,
    getListPage,
    getAdminIndexPage,
    getAdminCategorieslPage,
    getAdminLoginPage
}

module.exports = pagesController;