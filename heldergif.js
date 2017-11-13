const http = require('http');

var gif = '';

http.get('http://api.giphy.com/v1/gifs/random?q=funny+cat&api_key=2Wleb1uwRcbFzzZ351UOiT2JXYrkhwaX&limit=2', (resp) => {
  let data = ''; 
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    var resposta = JSON.parse(data);
    gif = resposta['data']['id'];    
	http.get('http://api.giphy.com/v1/gifs/'+gif+'?api_key=2Wleb1uwRcbFzzZ351UOiT2JXYrkhwaX', (resp) => {
	  let data = ''; 
	  // A chunk of data has been recieved.
	  resp.on('data', (chunk) => {
	    data += chunk;
	  });
	 
	  // The whole response has been received. Print out the result.
	  resp.on('end', () => {
	    var resposta = JSON.parse(data);
	    console.log(resposta['data']['bitly_url']);
	  });
	 
	}).on("error", (err) => {
	  console.log("Error: " + err.message);
	});
  });
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});



/*
http.get('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=2Wleb1uwRcbFzzZ351UOiT2JXYrkhwaX&limit=5', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
                      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
*/