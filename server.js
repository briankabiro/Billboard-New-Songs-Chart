var express = require('express');
var io = require('socket.io')(server);
var path = require('path');
var server = require('http').Server(app);
var app = express();
var port = process.env.PORT || 3000;
var mongodb = require('mongodb');


x
app.use(express.static('public'));
app.get('/', function(req,res){
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
				var collection = db.collection('testSongs');
				collection.find({"date":"2017-04-15"}).toArray(function(err, result){
					if(err){
						console.error("Database reading error",err);
					}else if(result.length){
						console.log(data);		
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