const conn = require('../utlis/conn.js');

exports.getAllPost = (obj, callback) => {
    // 创建sql语句
    var sql = `select posts.*,users.nickname,categories.name
                from posts
                join users on posts.user_id = users.id
                join categories on posts.category_id = categories.id 
                where 1=1  ` // 添加恒成立,这样的好处是后面进行语句拼接的时候不用判断是where或and,这样可以统一成and
    if (obj.cate && obj.cate != 'all') {
        sql += ` and category_id = ${obj.cate}`
    }
    if (obj.status && obj.status != 'all') {
        sql += ` and posts.status = '${obj.status}'`
    }
    sql += ` order by id desc
                limit ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`

    // 执行sql语句
    conn.query(sql, (err, results) => {
        if (err) {
            // console.log(err)
            callback(err);
        } else {
            //再创建sql语句,进行总记录查询
            sql = `select count(*) as cnt
            from posts
            join users on posts.user_id = users.id
            join categories on posts.category_id = categories.id`
            // 执行sql语句
            conn.query(sql, (err2, res2) => {
                if (err2) {
                    // console.log(err2)
                    callback(err2);
                    
                } else {
                    // 没有错误,不仅仅要返回之前查询的数据,而且还要返回当前查询的总记录数
                    callback(null, {
                        data: results,
                        total: res2[0].cnt
                    })
                }
            })
        }
    })
}