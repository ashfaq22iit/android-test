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
    username: String,
    password: String,
    profile: {
        firstName: String,
        lastName: String
    },
    staffId: String,
    scopes: {
        channel: String,
        discretion: String
    },
    store: String,
    emailId: String
});

// mongoose.model('employees', Table);
var users = mongoose.model('users', Table);
module.exports = users;