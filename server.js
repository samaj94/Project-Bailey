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
		handles:obj,
		mam:[
			
			{
				test: "\<blockquote class=\"twitter-tweet\" lang=\"en\"><p lang=\"en\" dir=\"ltr\"\>I don&#39\;t always see eye to eye with \<a href=\"https://twitter.com/SenJohnMcCain\"\>@SenJohnMcCain\</a\>. But I honor his service and the sacrifices he made for our country.</p>&mdash; Dr. Rand Paul (@RandPaul) <a href=\"https://twitter.com/RandPaul/status/622484094853758980\">July 18, 2015</a></blockquote> <script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>"
			}
		]
		
	})
}


)






app.listen(process.env.PORT || 3000);

console.log("Running at Port 3000");