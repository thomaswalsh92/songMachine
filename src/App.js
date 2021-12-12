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

  //USE STATE HOOKS
  //state for the access token.
  const [token, setToken] = useState('');

  //state for the genres used for all available genres in search.
  const [genres, setGenres] = useState([]);

  //state for the user-selected genres which will be used in search.
  const [selectedGenres, setSelectedGenres] = useState([]); 

  //state for the filtered genres used by the GenreFilter component.
  const [filteredGenres, setFilteredGenres] = useState([]);

  //const [maxGenresSelected, setMaxGenresSelected] = useState(false);
  

  //USE EFFECT HOOKS
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

  //GENRE SPECIFIC HANDLER FUNCTIONS
  //Sorts the selectedGenres state when ever changed
  useEffect(() => {
    setSelectedGenres (selectedGenres.sort());
  }, [selectedGenres]);


  //Handles adding to selectedGenres
  const selectGenre = (genre) => {
    if (selectedGenres.length < 5) 
      {
      setSelectedGenres([...selectedGenres, genre]);
      let newGenres = genres
      newGenres = newGenres.filter(element => element !== genre);
      setGenres(newGenres)
      }
    // ADD ERROR HANDLING REQUIRED IN BELOW CODE.
    else 
      {
      console.log('Max amount of genres selected.')
      }
  };
  
  //handles removing from selectedGenres
  const removeGenre = (genre) => {
    let newSelectedGenres = selectedGenres
    newSelectedGenres = newSelectedGenres.filter(element => element !== genre);
    setSelectedGenres(newSelectedGenres)
  };

  //handles the filtering behaviour for the genres field
  //filterGenres looks at the input field every time it is changed and 
  //compares the input string to the all elements in the genres array.

  const filterGenres = (input) => {
    function search(txt, pat)
    {   
        
      let M = pat.length;
      let N = txt.length;
   
      /* A loop to slide pat one by one */
      for (let i = 0; i <= N - M; i++) {
        let j;

        /* For current index i, check for pattern
        match */
        for (j = 0; j < M; j++)
          if (txt[i + j] != pat[j])
            break;

        // if pat[0...M-1] = txt[i, i+1, ...i+M-1]
        if (j == M)
          //console.log ('match', txt)
          return true;
      }
    }

    let newGenres = genres;

    newGenres = newGenres.filter((element) => {
      return search (element, input)
    });

    setFilteredGenres(newGenres); 
  };
  
    

  return (

    <div className="app">
      { (token === '') ? <Login/> : <WebPlayback token={token} /> }
      <Criteria 
      genres={genres}
      selectedGenres={selectedGenres}
      filteredGenres={filteredGenres}
      selectGenre={selectGenre}
      removeGenre={removeGenre}
      filterGenres={filterGenres}
      />
    </div>
  );
}

export default App;
