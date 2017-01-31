

module.exports = {
	var getSongs = function(){
		var billboard = require("billboard-top-100").getChart;
		billboard('hot-100', '2017-01-28', function(songs,err){
		if(err) console.log(err);
		var data = JSON.stringify(songs);

		fs.writeFile('data.txt',data,'utf-8',function(err){
			if(err) console.error(err);
			console.log('Chart was saved, master'); });
			
	});
	}
}

