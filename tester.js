/*General new songs i.e weeks on chart, less than 4 and has never been on chart
	2017-list -weeks on chart less than 3. 
	if last week = -- and current position = peak position or current position < peak position
	fist checl for weeks on chart then last week check
	create a formula to determine the best song from the above parameters top ten new list
	after implementing all the above, remember that new songs might fall from chart, better to iterate every week and compile
	write comments on every function and wherever necessary
	
	1- read data and get best songs of 2017 3 weeks list
	get charts from three previous weeks, check the newest songs

	2- Create formula to determine the best new songs from the new songs list
	weeks on chart,peak position, if last week position > this.weeks position + 1 
	add-1 to each and then compute total 
	if(first week and )
*/
var fs = require('fs');

module.exports = {
	newSongs : function(){
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
						newSongsArray.push({"artist":artist, "songTitle":songTitle});
					}		
				}
			// print array of all new songs
			for(var i = 0; i<newSongsArray.length; i++){
					console.log(newSongsArray[i].artist + " : "  + newSongsArray[i].songTitle);
				}
		},

	hotNewSongs : function(){
			var data = fs.readFileSync('data.txt', 'utf-8');
				var dataArray = JSON.parse(data);
				var newSongs = [];
				/* Check new songs and compute algorithm that determines the position that it will be
				will need new array to store data with and then store it in a file and then read from it later	
				1st formula, if(last week position > thisweek's position) counter ++

				*/
				//iterate over the array of data
				for(var i=0; i < dataArray.length; i++){	
						var counter = 0;
						var entry = dataArray[i];
						var position = entry.position;
						var weeks = position['Wks on Chart'];
						var songTitle = entry.title;
						var artist = entry.artist;


						//check how much time song has been on chart and add to an array if meets criteria
						if(weeks < 3){
							var thisWeek = entry.rank;
							var lastWeek = position["Last Week"];
							var peakPosition = position["Peak Position"];
							counter = (100 - thisWeek + 1);
							if(lastWeek > thisWeek){
								counter = counter + ( lastWeek - thisWeek);
							}else if(thisWeek === peakPosition){
								counter = counter +(100 - thisWeek);
							}
							newSongs.push([songTitle,artist,counter]);
						}	
					}
					newSongs.sort(function(a,b){
							if(a[2] < b[2]) return 1;
							if(a[2] > b[2]) return -1;
							return 0;
						});
					console.log('Trending This Week \n');
					for(var i= 0;i<newSongs.length; i++){
						console.log(newSongs[i][0] + ' : ' + newSongs[i][1]);	
				}
	}
};

