/**
 * Created by congzihan on 16/12/3.
 */
var mongoose = require('mongoose');
var itemModel = mongoose.model('Item');
var dbHelper = require('../helpers/dbHelper')
module.exports = {
    putItem: function (req, res, next) {
        itemModel.create({
            title: "test"
        }, function (error, results) {
            if (error)
                res.send({'success': false, 'err': error});
            else {
                res.send({'success': true});
                console.log("Item created: " + results);
            }
        })
    },
    getItemsByPage: function (req, res, next) {

        var page = req.params.page || 1;
        dbHelper.pageQuery(page, 5, itemModel, '', {}, {
            created_time: 'desc'
        }, function (error, $page) {
            if (error)
                res.send({'fail': false, 'err': error});
            else {
                //pageCount: 共多少页
                //results: 当前页的记录
                console.log("Item get by page: " + $page);
                res.json($page.results);
            }
        })
    }
};

