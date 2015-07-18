//TEST ASYNC

var async_function = function(val, callback){
    process.nextTick(function(){
        callback(val);
    });
};

var postnext = function ()
{
	console.log(43);
}


async_function(42, function(val) {
	console.log(val);
  
	postnext();	
	
});



//TEST TWITTER API

client.post('statuses/update', {status: 'Hey guys, going to be testing a hackathon project. The test tweets are coming.'},  function(error, tweet, response){
  if(error) throw error;
  console.log(tweet);  // Tweet body. 
  
});