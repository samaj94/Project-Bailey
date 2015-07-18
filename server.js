var express = require('express');
var app = express();
var Twitter = require('twitter');

var hbs = require('hbs');

var path = require('path');

var fs = require('fs');


var followers;
app.set('views', path.join(process.cwd(), './views'))
app.set('view engine', 'hbs')
app.engine('hbs', hbs.__express)

app.use(express.static(__dirname + '/public'));


app.post('/myaction', function(req, res) {
    
	
});



app.get('/', function (req, res){
	
	var obj = require('./tweettemp.json');
	
	//var obj = loadJSONfile(__dirname + '/tweettemp.json');
	
	console.log(obj);
	
	
	res.render('index', {
		
		layout:false,
		handles:obj
		
	})
}


)






app.listen(process.env.PORT || 3000);

console.log("Running at Port 3000");