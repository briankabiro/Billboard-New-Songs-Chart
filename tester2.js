/* 2- Create formula to determine the best new songs from the new songs list
	weeks on chart,peak position, if last week position > this.weeks position + 1 
	add-1 to each and then compute total 
	if(first week and )

	write function for each list and then call them depending on input 
	newest songs list sort according to hotness
	best new songs 2017
	trending this week


*/
var fs  = require('fs');

fs.readFile('data.txt', function(err,data){
	if(err) console.error(err);
	else{
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
			console.log('Trending This Week \n')
			for(var i= 0;i<newSongs.length; i++){
				console.log(newSongs[i][0] + ' : ' + newSongs[i][1]);	
			}
	}
});