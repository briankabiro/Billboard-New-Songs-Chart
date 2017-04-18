var mongodb = require("mongodb");

var MongoClient = mongodb.MongoClient;
var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test2';

MongoClient.connect(url, function(err, db){
	if(err){
		console.error("Unable to connect to server",err);
	}else{
		console.log("Connection established");
		var collection = db.collection('testSongs');
		collection.insert({
			
		})
	}
})
