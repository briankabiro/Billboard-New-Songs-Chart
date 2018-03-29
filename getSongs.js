var fs = require('fs');

module.exports = {
	getSongs : function(week){
		var billboard = require("billboard-top-100").getChart;
		billboard('hot-100', week, function(songs,err){
		if(err) console.error(err);

		else if(songs !== false){
			var data = JSON.stringify(songs);
			fs.writeFile('data.txt',data,'utf-8', function(err){
				if(err) console.error(err);
				console.log('Chart was saved, master');		
				});
			}
	});
	
	}
}

