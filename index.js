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
var async = require('asyncawait/async');
var await = require("asyncawait/await");
var getSongs = require('./getSongs');
var listGenerators = require('./tester.js');

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
	return newSongsArray;
}

const daWeek = moment().day(-1).format("YYYY-MM-DD")
//getSongs.getSongs(daWeek);
//newSongs();
listGenerators.hotNewSongs();