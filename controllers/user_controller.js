/**
 * Created by congzihan on 16/12/3.
 */
var mongoose = require('mongoose');
var userModel = mongoose.model('User');

module.exports = {
    get:function (req, res, next) {
        userModel.findOne({
            user_id: req.params.userId
        },function (error,results) {
            if(error)
                return next(error);
            res.json(results);
            console.log("user get " + results);
        })
    }
};

