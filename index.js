var fs = require('fs');
/*
	get full chart with data, store in text file, read and extract songs from data
 */


var billboard = require("billboard-top-100").getChart;

billboard('hot-100', function(songs,err){
	if(err) console.error(err);
	var data = JSON.stringify(songs);

	/*fs.writeFile('data.txt',data,'utf-8',function(err){
		if(err) console.error(err);
		console.log('Chart was saved, master')
	})*/
})





