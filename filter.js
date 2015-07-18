var express = require('express');
var app = express();
app.use(require('express-jquery')('/jquery.js'));
var path = require('path');
var fs = require('fs');
var obj = require('./users.json');
var topics = require('./issues.json')
var $ = require('jquery');

var post = [];

//console.log(issue);

for (var test2 in topics)
{
	for (var test3 in topics[test2].endorse)
	{
		//console.log(issue[test2].endorse[test3]);
		
		for(var test in obj) {
  
			if(topics[test2].endorse[test3] == obj[test])
			{
				if (post.indexOf(topics[test2].issue) == -1)
					post.push(topics[test2].issue);
					
			}
			
				
			//console.log(topics[test2].issue);
  		  
		}
		
		
	}
  
	
  
}

console.log(post);