var express = require('express');
var app = express();
var Twitter = require('twitter');

var hbs = require('hbs');

var path = require('path');

var followers;
app.set('views', path.join(process.cwd(), './views'))
app.set('view engine', 'hbs')
app.engine('hbs', hbs.__express)

app.use(express.static(__dirname + '/public'));

 
var client = new Twitter({
  consumer_key: 'xOMDbOMHe0K18MctufpiA4KW2',
  consumer_secret: 'o6qcAKtpXQazeo37kRrCiym4z8Y3pQKoxZnp2HVuVzQFpOR70n',
  access_token_key: '2727197461-fAW2kCQ6hoYLLEMNODbDgBVPUvWWJ0nYUv8Fd4E',
  access_token_secret: '3pynIwkP7LHpUIkf357mtcPsIUSaouQvIBXbo52Ktbtud'
});
 

app.post('/myaction', function(req, res) {
    
	
});


client.get('followers/list.json?count=9', function(error, response){
  if(error) throw error;
  followers = response;
  //console.log(followers.users[1].name);
  
  
  
  
  for(var fcount in followers.users)
  {
	  var hold = 'friends/list.json?cursor=-1&screen_name=' + followers.users[fcount].screen_name + '&skip_status=true';
  
  
	  client.get(hold, function(error,res){
		  
		  console.log(res);
	
		  for(var test in res.users) {
		     console.log("username:"+  res.users[test].name);
		  }
	
	  });
  }

});

app.get('/', function (req, res){
	
	res.render('index', {
		
		layout:false,
		handles: ['@jasonkalmeida', '@jsnklmd', '@twitter']
		
	})
}


)

app.listen(process.env.PORT || 3000);

console.log("Running at Port 3000");