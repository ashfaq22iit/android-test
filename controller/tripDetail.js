var mongoose = require('mongoose');
var TripDetail = require('../models/tripDetail');
var Helpers = require('../lib/helpers');
var DbHelper = require('../lib/dbHelper');



exports.addTrip = function (req, res) {
      var data = req.all;
      console.log('data', data);
      var requirement = { endPoint: null, startPoint: null, userId: null, vehicleType: null,
                          color: null, perSeatPrice: null, totalSeat: null, startTime: null,endTime: null, description: null };
      for (var key in requirement) {
        if (!data[key] || data[key] == "" || data[key] == null) {
          return res.send({
            code: 400,
            message: "Please Enter " + key,
            success: false
          });
        }
      }
    DbHelper.add(data,TripDetail, function (err ,data) {
        if (err) {
            console.log(err);
            return res.send({ code: 404, message: 'Data save error.', success: null, error: err });
        } else {
            console.log('meow', data);
            return res.send({ code: 400, message: 'Data successfully save.', success: data, error: null });
        }
    });
};

exports.getAllList = function (req, res) {
    TripDetail.find({}, function (err, data) {
        if (err) {
            console.log(err);
            return res.send({ code: 404, message: 'Data save error.', success: null, error: err });
        } else {
            console.log('meow', data);
            return res.send({ code: 200, message: 'Data successfully save.', success: data, error: null });
        }
    });
};


