var crypto = require("crypto");
// var request = require("request");
var DB = require("../models/modelsExposer");

exports.getOne = function(obj, table, cb) {
  table.findOne(obj, function(err, res) {
    cb(err, res);
  });
};

exports.deleteRow = function(obj, table, cb) {
  table.remove(obj, function(err, res) {
    cb(err, res);
  });
};

exports.add = function(obj, table, cb) {
  var objs = new table(obj);
  objs.save(function(err, res) {
    cb(err, res);
  });
};

exports.updateOne = function(id, obj, table, cb) {
  table.findByIdAndUpdate(id, obj, function(err, result) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
};
