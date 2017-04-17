/*var listGenerators = require('./tester.js');
var getSongs = require('./getSongs');
get full chart with data, store in text file, read and extract songs from data
	data for first week is on 14th on this app which is data for 10th January
	read data and build a list by calling the function
	ultimately get all data from this year and compile the list according to the algorithms
	billboard new songs.com
 	week = -1
console.log(moment().day(-1).format("YYYY-MM-DD"));*/
var fs = require('fs');
var moment = require('moment')
var async = require('asyncawait/async')
var await = require("asyncawait/await")
var billboard = require("billboard-top-100").getChart;

function getSongs(week){
	billboard('hot-100', week, function(songs,err){
	if(err) console.error(err);

	else if(songs !== false){
		var data = JSON.stringify(songs);
		fs.writeFile('data.txt',data,'utf-8',function(err){
			if(err) console.error(err);
			console.log('Chart was saved, master');		
			});
		}
	});
}

function newSongs(){
	var data = fs.readFileSync('data.txt', 'utf-8');

	var dataArray = JSON.parse(data);
	var newSongsArray = [];
	//iterate over the array of data
	for(var i=0; i < dataArray.length; i++){	
			var entry = dataArray[i];

			var position = entry.position;
			var weeks = position['Wks on Chart'];
			var songTitle = entry.title;
			var artist = entry.artist;

			//check how much time song has been on chart and add to an array if meets criteria
			if(weeks == 1){
				//newSongsArray.push({"artist":artist, "songTitle":songTitle});
				newSongsArray.push(entry)
			}		
		}
	console.log(newSongsArray);
	return newSongsArray;
}



var weeks = moment().week() - 1;
var week = -1;	
console.log(weeks)

//get songs, compile songs add to database

var function1 = async(function(){
	await (getSongs(moment().day(-1).format("YYYY-MM-DD")));
	await (newSongs());
	await (console.log("finished"));
})

function1().then();



