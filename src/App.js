import React, { useState, useEffect } from 'react';
import WebPlayback from './WebPlayback'
//Front end components
import Login from './Login'
import Genres from './Criteria/Genres'
import getGenres from './utility/getGenres'

//CSS
import './css/reset.css'
import './css/styles.css'
import Criteria from './Criteria/Criteria';
import { get } from 'request';


function App() {
  
  //state for the access token.
  const [token, setToken] = useState('');

  //state for the genres used for genre search.
  
  const [genres, setGenres] = useState([])
  //const [selectedGenres, setSelectedGenres] = useState([]); 
  

  //gets and sets Token for access to Spotify SDK
  useEffect(() => {
    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }
    getToken();
    
  }, []);

  //initialises genres state
  useEffect(() => {
    const initGenres = async () => {
      const response = await getGenres()
      setGenres(response)
    }  
    initGenres(); 
  }, []);

  const updateGenresLoaded = (bool) => {
    setGenresLoaded(bool)
  }


  return (

    <div className="app">
      { (token === '') ? <Login/> : <WebPlayback token={token} /> }
      <Criteria 
      genres={genres}
      />
    </div>
  );
}

export default App;
