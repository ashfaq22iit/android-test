var mongoose = require('mongoose');
var Users = require('../models/users');
var Helpers = require('../lib/helpers');
var DbHelper = require('../lib/dbHelper');

exports.addUsers = function (req, res) {
    //   var data = req.all;
      let data = {
        "username": "test name",
        "password": Helpers.decodeMD5('12345'),
        "profile": {
        "firstName": "fahad",
        "lastName": "test"
        },
        "staffId": '123ftg',
        "scopes": {
        "channel": "sale",
        "discretion": "it a test channel"
        },
        "store": "name",
        "emailId": "sales@gmail.com",
        "displayName": "test display"
        }
   console.log('data', data);
    DbHelper.add(data,Users , function (err ,data) {
        if (err) {
            console.log(err);
            return res.send({ code: 404, message: 'Data save error.', success: null, error: err });
        } else {
            console.log('meow', data);
            return res.send({ code: 400, message: 'Data successfully save.', success: data, error: null });
        }
    });
};

exports.getUsersList = function (req, res) {
    Users.find({}, function (err, data) {
        if (err) {
            console.log(err);
            return res.send({ code: 404, message: 'Data save error.', success: null, error: err });
        } else {
            console.log('meow', data);
            return res.send({ code: 200, message: 'Data successfully save.', success: data, error: null });
        }
    });
};

exports.updateUserById = function (req, res) {
    //   var data = req.all;
      let data = {
        "id":"59d503855dcb8b05282e3f58",
        "username": "test test 2222 name",
        "password": "rewrfdsfdsew",
        "profile": {
        "firstName": "te222st",
        "lastName": "tef 222bgg"
        },
        "staffId": 'hdghdg222h545',
        "scopes": {
        "channel": "sal222e fds",
        "discretion": "fdsfds"
        },
        "store": "fdsf",
        "emailId": "fdsfdsf@2222.com",
        "displayName": "fdsfs222df"
        }
   console.log('data', data);
    Users.findByIdAndUpdate(data.id,data, function (err, result) {
        if (err) {
            console.log(err);
            return res.send({ code: 404, message: 'Data save error.', success: null, error: err });
        } else {
            console.log('meow', data);
            return res.send({ code: 200, message: 'Data successfully save.', success: data, error: null });
        }
    });
};

