var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'xOMDbOMHe0K18MctufpiA4KW2',
  consumer_secret: 'o6qcAKtpXQazeo37kRrCiym4z8Y3pQKoxZnp2HVuVzQFpOR70n',
  access_token_key: '2727197461-fAW2kCQ6hoYLLEMNODbDgBVPUvWWJ0nYUv8Fd4E',
  access_token_secret: '3pynIwkP7LHpUIkf357mtcPsIUSaouQvIBXbo52Ktbtud'
});
 
client.post('statuses/update', {status: 'Hey guys, going to be testing a hackathon project. The test tweets are coming.'},  function(error, tweet, response){
  if(error) throw error;
  console.log(tweet);  // Tweet body. 
  
});