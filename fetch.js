var express = require('express');
var app = express();
var Twitter = require('twitter');


var path = require('path');

var followers;


var fs = require('fs');

var client = new Twitter({
  consumer_key: 'xOMDbOMHe0K18MctufpiA4KW2',
  consumer_secret: 'o6qcAKtpXQazeo37kRrCiym4z8Y3pQKoxZnp2HVuVzQFpOR70n',
  access_token_key: '2727197461-fAW2kCQ6hoYLLEMNODbDgBVPUvWWJ0nYUv8Fd4E',
  access_token_secret: '3pynIwkP7LHpUIkf357mtcPsIUSaouQvIBXbo52Ktbtud'
});
 


client.get('followers/list.json?count=2', function(error, response){
  if(error) throw error;
  followers = response;
  
  
  
  
  var obj = [];
  
  for(var fcount in followers.users)
  {
	  var hold = 'friends/list.json?cursor=-1&screen_name=' + followers.users[fcount].screen_name + '&skip_status=true';
  
	 
	  
  	  
  
	  client.get(hold, function(error, res){
		  
		   //console.log(res);
		 
		 /* 
		  var str = JSON.parse(res);
		  
		  str.users.forEach(function(item)
	  {
	  	obj.push(item.name)
		
	  })*/
		  
	
		  for(var test in res.users) {
			  
		  	 //obj = obj.concat()
			  obj.push(res.users[test].screen_name); 
		     //console.log("username:"+  res.users[test].name);
		  }
	
	  });
  }
  
  obj = JSON.stringify(obj);
  
  fs.writeFileSync(path.join(__dirname, './tweettemp.json'), obj , 'utf8')

});