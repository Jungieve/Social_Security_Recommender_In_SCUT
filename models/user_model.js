/**
 * Created by congzihan on 16/12/3.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    userId: String,
    careerLevel: Number,
    discipline: String,
    industry: String,
    region: String,
    experienceYears: Number,
    eduDegree: String
});

module.exports = mongoose.model('User',UserSchema);