var fs = require('fs');
var async = require('asyncawait/async')
var await = require("asyncawait/await")


var function1 = async(
	function (){
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
})

function1().then(function(songs){
	songs.forEach(function(song){
		console.log(song.rank, song.title)
	})
	console.log("these are da songs")
}).catch(function(err) {console.error("Something went wrong " + err)})