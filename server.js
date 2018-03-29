var express = require('express');
var app = express();
var path = require('path');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;
var mongodb = require('mongodb');
var moment = require('moment');
const listGenerators = require('./tester.js');
var getSongs = require('./getSongs.js')
var schedule = require('node-schedule');
 
var j = schedule.scheduleJob({dayOfWeek: 3}, function(){
  let week = moment().format('YYYY-MM-DD');
  getSongs.getSongs(week);
});

app.use(express.static('public'));

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/send_data', function(req, res, next){
	hotNewSongs = listGenerators.hotNewSongs();
	newSongs = listGenerators.newSongs();
	next()
}, function(req, res){
	res.json({
		"new": newSongs,
		"hot": hotNewSongs
	})
})

server.listen(port, function(){
	console.log("Listening on port number", port);
});