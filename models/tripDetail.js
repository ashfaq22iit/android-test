/**
 * Created by ashfaq hussain 1 on 08/03/2017.
 * email ashfaq2iit@gmail.com
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var Table = new Schema({
    startPoint: {
        type: [Number],  // [<longitude>, <latitude>]
        index: '2d'      // create the geospatial index
    },
    endPoint: {
        type: [Number],  // [<longitude>, <latitude>]
        index: '2d'      // create the geospatial index
    },
    vehicleType:String,
    imageUrls:[],
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    color :String,
    perSeatPrice: String,
    totalSeat: String,
    reserveSeat: String,
    start_time:Date,
    address:String,
    end_time:Date,
    trip_id :String,
    status:String,
    message:String,
    create_at:Date,
    cancel_by:String,
    description:String
});

// mongoose.model('employees', Table);
var tripDetail = mongoose.model('tripDetail', Table);
module.exports = tripDetail;