var app = require('express')();
var http = require('http').Server(app);
var merge      = require('merge');
var bodyParser = require('body-parser');


//Linde for including css files
var express = require('express');
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/QA');
mongoose.connect('mongodb://ashfaq:ashfaq123@ds239587.mlab.com:39587/pakrideshare');
// 
var TripDetail = require('./controller/tripDetail');
var users = require('./controller/users');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.header('Access-Control-Expose-Headers', 'Authorization')
        if ('OPTIONS' == req.method) { // this is a pre-flight options verification we do not want to run the code behind
            res.send(200);
            return;
        }
        req.all = merge.recursive(true, req.parms, req.query, req.body, req.headers);
		next();
	})
app.post('/users/list-all', users.getUsersList);
app.post('/users/add', users.addUsers);
app.post('/users/updated', users.updateUserById);

app.post('/tripDetail/list-all', TripDetail.getAllList);
app.post('/tripDetail/add', TripDetail.addTrip);



var port = 3000;

http.listen(port, function(req, res){
	console.log(' server is running on port: ', port);
});