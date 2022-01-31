## The app 

songMachine is an app designed to help you find music recommendations from Spotify and play them in the browser. You can select from all of the available genres in Spotify, or select seed artists/tracks and songMachine will use the Spotify APIs to find new music. You can also tailor these suggestions with tweakable attributes such as popularity, energy and tempo. 

##Important information 

This project has been built on top of the Spotify Web Playback SDK guide GitHub repo:
(https://github.com/spotify/spotify-web-playback-sdk-example). 

The code from this repo has been significantly modified, building off the included server/index.js file which handles the auth flow required for access to Spotify APIs and Web Playback SDK. A custom React frontend has been added to this as well as a number of extra endpoints in server/index.js to handle the calls to Spotify API.

To run songMachine locally you will need to do the following: 

## Get your own credentials

You will need to register your app and get your own credentials from the
[Spotify for Developers Dashboard](https://developer.spotify.com/dashboard/)

To do so, go to your Spotify for Developers Dashboard, create your
application and register the following callback URI:

`http://localhost:5000/auth/callback`

Once you have created your app, create a file called `.env` in the root folder
of the repository with your Spotify credentials:

```bash
SPOTIFY_CLIENT_ID='my_client_id'
SPOTIFY_CLIENT_SECRET='my_client_secret'
```

## Installation

These examples run on Node.js. On its
[website](http://www.nodejs.org/download/) you can find instructions on how to
install it.

Once installed, clone the repository and install its dependencies running:

```bash
npm install
```

## Running the example

Start the server with the following command:

```bash
npm run server
```

The server will serve a static file of the React application.

