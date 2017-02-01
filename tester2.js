/* 2- Create formula to determine the best new songs from the new songs list
	weeks on chart,peak position, if last week position > this.weeks position + 1 
	add-1 to each and then compute total 
	if(first week and )

	write function for each list and then call them depending on input 
	newest songs list sort according to hotness
	best new songs 2017
	trending this week


*/
/* compiler function
Check Bad & Bougee Childish Gambino hypothesis
want to compile a list of all the top songs released in January
Check if I can fetch photos from billboard to display them

Should write to a certain file an array of the songs that I get and then iterate each week
to see if it is on list
First get all the new songs and then get the hottest list by saving the score from hottest algorithm
 run tester 1 and then return an array of the objects of the songs information
 run tester 2 on this data to compile the new list

 get list, tester 1, 

 add to array of data in my.data txt as an array with objects of songs
 after saving, add 1 week to function and then repeat until no data
 */
var fs = require('fs');
var listGenerators = require('./tester.js');
var date = new Date("January 10, 2017");
var getSongs = require('./getSongs.js');

var tester2  = function(){
	/*test what getSongs returns when there is no data
	 if getSongs returns ok, change weeks to one week later,weeks should be an array so that it can be converted to a string easily
	*/
	var week = date.getFullYear()+ "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
	var message = getSongs.getSongs(week);
	console.log(message);

	if(message !== "no chart found"){
		//newSongs should add i to an array and return that array
		var newSongsArray = listGenerators.newSongs();
		//how to check how to write data to an array in a file 
		console.log(newSongsArray +' newSongsArray');
		var myDataArray = fs.readFileSync('mydata.txt')
		console.log(myDataArray + 'myDataArray');
		myDataArray.push(newSongsArray);
		fs.writeFileSync('mydata.txt', myDataArray);
		//week is gotten by adding seven days to the date to get next weeks date
		date.setDate(date.getDate()+7);
		tester2();
	}else{
		console.log('Analysis completed Master!!');
	}	
};

tester2();