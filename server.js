var express = require('express');
var app = express();
var path = require('path');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;
var mongodb = require('mongodb');

app.use(express.static('public'));

app.get('*', function(req,res){
	res.sendFile(path.join(__dirname, '/public/index.html'));
});
/*add  date entry in the collection
	date:"",
	newsongs:"",
	hotsongs:""
*/
io.on('connection', function(socket){
	socket.on('leta', function(){
		var MongoClient = mongodb.MongoClient;
		var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test2';

		MongoClient.connect(url, function(err, db){
			if(err){
				console.error("Unable to connect to server",err);
			}else{
				console.log("Connection established");
				var collection = db.collection('test2');
				collection.find({"date":"2017-04-15"}).toArray(function(err, result){
					if(err){
						console.error("Database reading error",err);
					}else if(result.length){
						console.log(result);
						socket.emit("results", result)		
					}else{
						console.log('No documents were found');
					}
					db.close();
				});				
			}
		});
	});
});

server.listen(port, function(){
	console.log("Listening on port number", port);
});