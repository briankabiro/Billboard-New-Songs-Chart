var fs = require('fs');
var await = require("await")

function doStuff(){
	return await('one');
	var black = "black"
	return black
}
function doStuff1(){
	return await('two');
	var jack = "jack";
	console.log(jack);
}

doStuff().then(function(){
	return doStuff1()
}).then(function(got){
	console.log(got.one)
	console.log(got.two)
}).catch((err) => {
	console.error(err)
})