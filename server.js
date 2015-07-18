var express = require('express');
var app = express();
var Twitter = require('twitter');

app.use(express.static(__dirname + '/public'));
 
var client = new Twitter({
  consumer_key: 'xOMDbOMHe0K18MctufpiA4KW2',
  consumer_secret: 'o6qcAKtpXQazeo37kRrCiym4z8Y3pQKoxZnp2HVuVzQFpOR70n',
  access_token_key: '2727197461-fAW2kCQ6hoYLLEMNODbDgBVPUvWWJ0nYUv8Fd4E',
  access_token_secret: '3pynIwkP7LHpUIkf357mtcPsIUSaouQvIBXbo52Ktbtud'
});
 
app.post('/', function(req, res) {
    var loc = req.body.local;
	
	
	res.sendFile(__dirname + '/public/index.html');
	
});


app.listen(process.env.PORT || 3000);

console.log("Running at Port 3000");