import React, { useState, useEffect } from 'react';
import WebPlayback from './WebPlayback';

//Request for login call
import { get } from 'request';

//Front end components
import Login from './Login';

//Criteria section
import Criteria from './Criteria/Criteria';
import Genres from './Criteria/Genres';

//API helper function(s)
import getGenres from './utility/getGenres';

//CSS
import './css/reset.css';
import './css/styles.css';




function App() {
  
  //state for the access token.
  const [token, setToken] = useState('');

  //state for the genres used for all available genres in search.
  const [genres, setGenres] = useState([])

  //state for the user-selected genres which will be used in search.
  const [selectedGenres, setSelectedGenres] = useState([]); 
  

  //gets and sets Token for access to Spotify SDK
  useEffect(() => {
    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }
    getToken();
    
  }, []);

  //initialises app wide genres state
  useEffect(() => {
    const initGenres = async () => {
      const response = await getGenres()
      setGenres(response)
    }  
    initGenres(); 
  }, []);

  //Handles adding to selected genres
  
  const selectGenre = (genre) => {
    if (selectedGenres.length < 5) 
      {
      setSelectedGenres([...selectedGenres, genre])
      }
    // ERROR HANDLING REQUIRED
    else 
      {
      console.log('Max amount of genres selected.')
      }
  };

  const removeGenre = (genre) => {
    let newGenres = selectedGenres
    newGenres = newGenres.filter(element => element !== genre);
    setSelectedGenres(newGenres)
  };


  return (

    <div className="app">
      { (token === '') ? <Login/> : <WebPlayback token={token} /> }
      <Criteria 
      genres={genres}
      selectGenre={selectGenre}
      removeGenre={removeGenre}
      />
    </div>
  );
}

export default App;
