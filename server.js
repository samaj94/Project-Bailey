var express = require('express');
var app = express();
var Twitter = require('twitter');

var hbs = require('hbs');

var path = require('path');

var fs = require('fs');


var client = new Twitter({
  consumer_key: KEY-HERE,
  consumer_secret: KEY-HERE,
  access_token_key: KEY-HERE,
  access_token_secret: KEY-HERE
});

var followers;
app.set('views', path.join(process.cwd(), './views'))
app.set('view engine', 'hbs')
app.engine('hbs', hbs.__express)

app.use(express.static(__dirname + '/public'));


app.post('/myaction', function(req, res) {
	
	string = ".@HillaryClinton, Lyft and Airbnb are great for America!"
	
	client.post('statuses/update', {status: string},  function(error, tweet, response){
	  if(error) throw error;
	  console.log(tweet);  // Tweet body. 
	});
    
	
});



app.get('/', function (req, res){
	
	var obj = require('./tweettemp.json');
	var suggest = require('./topics.json');
	
	//var obj = loadJSONfile(__dirname + '/tweettemp.json');
	
	console.log(suggest);
	
	
	res.render('index', {
		
		layout:false,
		handles:suggest
		
	})
}


)






app.listen(process.env.PORT || 3000);

console.log("Running at Port 3000");