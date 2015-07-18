var express = require('express');
var app = express();
var Twitter = require('twitter');

var followers;

app.use(express.static(__dirname + '/public'));
 
var client = new Twitter({
  consumer_key: 'xOMDbOMHe0K18MctufpiA4KW2',
  consumer_secret: 'o6qcAKtpXQazeo37kRrCiym4z8Y3pQKoxZnp2HVuVzQFpOR70n',
  access_token_key: '2727197461-fAW2kCQ6hoYLLEMNODbDgBVPUvWWJ0nYUv8Fd4E',
  access_token_secret: '3pynIwkP7LHpUIkf357mtcPsIUSaouQvIBXbo52Ktbtud'
});
 
app.get('/', function(req, res) {
	
	console.log('TEST');
	
	client.get('followers/list', function(error, response){
  	  if(error) throw error;
	  console.log('TEST');
  		console.log(response);  // Tweet body. 
  
	});
	
	res.sendFile(__dirname + '/public/hworld.html');

	console.log('TEST');
	
});

app.post('/myaction', function(req, res) {
    
	
});


client.get('followers/list.json?count=2', function(error, response){
  if(error) throw error;
  followers = response;
  //console.log(followers.users[1].name);
  
  client.get('friends/list.json?user_id=' + followers.users[1].id + '&count=1', function(error,res){
  	
	console.log(res)
	
	
  });

});


app.listen(process.env.PORT || 3000);

console.log("Running at Port 3000");