/**
 * Created by congzihan on 16/12/3.
 */
var  mongoose = require('mongoose');
var db = 'mongodb://localhost:27017';
mongoose.connect(db);

//log message to the console
mongoose.connection.on('connected',function () {
    console.log('Mongoose connected to '+db);
});

//log message to the disconnected
mongoose.connection.on('disconnected',function () {
    console.log('Mongoose disconnected');
});

//Close the Mongoose connection on Ctrl+C
process.on('SIGINT',function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected');
        process.exit(0);
    });
});

require('../models/user_model');
require('../models/item_model');