// This code was originally taken and adapted from the spotify web playback sdk example github repo:
// URL: https://github.com/spotify/spotify-web-playback-sdk-example
// A full summary of changes can be found in readme.md .

//added /api/genres and /api/recommendation endpoints.

//import required libraries, express as the node framework, request as ... ??, dotenv allows api access codes to be stored in .env file.
const express = require('express');
const request = require('request');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

//specificying the port for the server
const port = 5000

//initialing global.access_token to an empty string
global.access_token = ''

// configures dotenv
dotenv.config()

// initialises two variables with the values stored in .env file
var spotify_client_id = process.env.SPOTIFY_CLIENT_ID
var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET

// inits a var with the URI to link 
var spotify_redirect_uri = 'http://localhost:3000/auth/callback'

// genereates a random string  to be used later as the state variable in the JSON
var generateRandomString = function (length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

// initialises express to the variable app
var app = express();

// defines the function to be run at the /auth/login end point.
app.get('/auth/login', (req, res) => {

  // scope defines what access the SDK Will grant
  var scope = "streaming user-read-email user-read-private"
  // state is initialised with the results of generate random string
  var state = generateRandomString(16);

  // uses URL search params to create methods for the following values, this allows them to be input into the URL given to res.redirect below: 
  var auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    scope: scope,
    redirect_uri: spotify_redirect_uri,
    state: state
  })

  // result of the express get request is redirected to the spotify authorize end point.
  res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
})

app.get('/auth/callback', (req, res) => {

  //takes code from the request from spotify
  var code = req.query.code;

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: spotify_redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      access_token = body.access_token;
      res.redirect('/')
    }
  });
})

app.get('/auth/token', (req, res) => {
  res.json({ access_token: access_token})
})


app.get('/api/genres', async (req, res) => {
  const url = 'https://api.spotify.com/v1/recommendations/available-genre-seeds'

  const response = await fetch (url, {
    method: 'GET',
    headers : {
      'Accept' : 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + access_token
    }  
  }).then(response => response.json())
  .then(data => {
    res.json(data)
  })
}); 

app.get('/api/search', async (req, res) => {
  
  const url = `https://api.spotify.com/v1/search?q=${req.query.string}&type=track`
  
  const response = await fetch (url, {
    method: 'GET',
    headers : {
      'Accept' : 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + access_token
    }  
  }).then(response => response.json())
  .then(data => {
    res.json(data)
  })
});

// app.get('/api/recommendations', async (req, res) => {
//   const url = 'https://api.spotify.com/v1/recommendations'

//   const response = await fetch (url, {
//     method: 'GET',
//     headers : {
//       'Accept' : 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization' : 'Bearer ' + access_token
//     }  
//   }).then(response => response.json())
//   .then(data => {
//     res.json(data)
//   })
// });




app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});

//server