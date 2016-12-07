/**
 * Created by congzihan on 16/12/3.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ItemSchema = new Schema({
    itemID: String,
    title: Number,
    careerLevel: Number,
    discipline: String,
    industry: String,
    region: String,
    employment: Number,
    createdAt: {type : Date, default: Date.now},
    activeDuringTest: Boolean
});

module.exports = mongoose.model('Item',ItemSchema);