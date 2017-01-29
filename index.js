var fs = require('fs');

/*
	get full chart with data, store in text file, read and extract songs from data
	data for first week is on 14th on this app which is data for 10th January
 */


var billboard = require("billboard-top-100").getChart;
/*
billboard('hot-100', function(songs,err){
	if(err) console.error(err);
	var data = JSON.stringify(songs);

	fs.writeFile('data.txt',data,'utf-8',function(err){
		if(err) console.error(err);
		console.log('Chart was saved, master')
	})
})*/

billboard('hot-100', '2017-01-28', function(songs,err){
	if(err) console.log(err);
		var data = JSON.stringify(songs);

		fs.writeFile('data.txt',data,'utf-8',function(err){
			if(err) console.error(err);
			console.log('Chart was saved, master'); });
			
});




