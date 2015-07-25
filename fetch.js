var express = require('express');
var app = express();
var Twitter = require('twitter');


var path = require('path');

var followers;


var fs = require('fs');

var client = new Twitter({
  consumer_key: KEY-HERE,
  consumer_secret: KEY-HERE,
  access_token_key: KEY-HERE,
  access_token_secret: KEY-HERE
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