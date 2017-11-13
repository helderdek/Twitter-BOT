var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '59f4PaaimO9bv1O1ldZVGQw69',
  consumer_secret: 'aPk11Bcd3LkOiSRIiI4nvxDuurGAM2m0Vka2JdqYJvfs3A4Xwu',
  access_token_key: '929347083454287873-EMvjaMhZoTTmQSQ7luu1BlzLDz6S2l6',
  access_token_secret: 'SU5gVTv9HtjN2JU7DnRjhwynu3F7WUsz4rRZl4vsUzn7S',
  
});
var num = 10;
console.log('algo');
client.stream('statuses/filter', {track: 'Estou triste'},  function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
/*
client.get('search/tweets', {q: "I'm so so sad"}, function(error, tweets, response) {
if (!error) {
	for(var i = 0; i <tweets.length; i++){
		console.log(tweets[i].text);		
	}	  	
	    
  }else{
		throw error;
	}
});
*/

