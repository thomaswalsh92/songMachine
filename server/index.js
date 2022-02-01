const express = require('express');
const request = require('request');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const path = require('path');

const port = process.env.PORT || 5000

global.access_token = ''

dotenv.config()

let spotify_client_id = process.env.SPOTIFY_CLIENT_ID
let spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET

//run on heroku
let spotify_redirect_uri = 'https://songmachine.herokuapp.com/auth/callback'

//run local server/static build
//let spotify_redirect_uri = 'http://localhost:5000/auth/callback'

//run local dev build
// let spotify_redirect_uri = 'http://localhost:3000/auth/callback'



let generateRandomString = function (length) {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

let app = express();

app.get('/auth/login', (req, res) => {

  let scope = "streaming user-read-email user-read-private"
  let state = generateRandomString(16);

  let auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    //scope: scope,
    redirect_uri: spotify_redirect_uri,
    state: state
  })

  res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
})

app.get('/auth/callback', (req, res) => {

  let code = req.query.code;

  let authOptions = {
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
  
  const url = `https://api.spotify.com/v1/search?q=${req.query.string}&type=track&limit=21`
  
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

app.get('/api/recommendations', async (req, res) => {
  let url = `https://api.spotify.com/v1/recommendations?limit=1&seed_artists=${req.query.artists}&seed_genres=${req.query.genres}&seed_tracks=${req.query.tracks}`//&target_energy=${req.query.energy}&target_tempo=${req.query.tempo}`
  if (req.query.popularity) {
    url = url.concat (`&target_popularity=${req.query.popularity}`)
  }
  if (req.query.energy) {
    url = url.concat (`&target_energy=${req.query.energy}`)
  }
  if (req.query.tempo) {
    url = url.concat (`&target_tempo=${req.query.tempo}`)
  }
  
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

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) =>  {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});


//server