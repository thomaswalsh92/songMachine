import React, { useState, useEffect } from 'react';
import WebPlayback from './WebPlayback';

//Request for login call
import { get } from 'request';

//Front end components
import Login from './Login';
import Criteria from './Criteria/Criteria';
import Suggestion from './Suggestion/Suggestion';
import Seeds from './Seeds/Seeds'
import Search from './Search/Search'

//API helper function(s)
import getGenres from './utility/getGenres';
import getRecommendations from './utility/getRecommendations';
import getSearch from './utility/getSearch';

//CSS
import './css/reset.css';
import './css/styles.css';

function App() {

  //USE STATE HOOKS
  //state for the access token.
  const [token, setToken] = useState('');

  //State for all available genres in search. 
  const [genres, setGenres] = useState([]);

  //State for the user-selected genres which will be used in search. 
  //Selecting a genreTile will add the relevant genreObject to this 
  //array.
  const [selectedGenres, setSelectedGenres] = useState([]); 
  
  //State for selectedTracks
  const [selectedTracks, setSelectedTracks] = useState([1, 2, 3]);

  //State for searchedTracks 
  const [searchedTracks, setSearchedTracks] = useState();

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
      let packagedGenres = packageGenres(response);
      await setGenres(packagedGenres);
    }  

    initGenres(); 
  }, []);

  //GENRE SPECIFIC HANDLER FUNCTIONS
  //Sorts the selectedGenres state based on when ever changed.
  //TO-DO Re-factor for object model.
  useEffect(() => {

  }, [selectedGenres]);

  //takes an array of genres (from spotify API) and packages
  //into objects to be used in Genres component.
  const packageGenres = (genres) => {
    class genreObject {
      constructor(genreName) {
        this.name = genreName;
        this.isSelected = false;
        this.isFiltered = true;
      };
    };

    if (genres) {
      let newGenres = [];

      genres.forEach(element => {
        let thisGenre = new genreObject(element);
        newGenres.push(thisGenre);
      });

      return newGenres;
    }
    
  };

  //Handles adding to selectedGenres. 
  const selectGenre = (genre) => {
    if (selectedGenres.length < 5) {
      genres.forEach(element => {
        if (element.name === genre.name) {
          setSelectedGenres([...selectedGenres, genre])
          genre.isSelected = true;
        };
      });
    }
    // ADD ERROR HANDLING REQUIRED IN BELOW CODE.
    else 
      {
      console.log('Max amount of genres selected.')
      }
  };
    
  //handles removing from selectedGenres
  const removeGenre = (genre) => {
    let newSelectedGenres = selectedGenres.filter(element => {
      if (element.name !== genre.name) {
        genre.isSelected = false;
        return true;
      }
    })
    setSelectedGenres(newSelectedGenres)
  };

  //handles the filtering behaviour for the genres field
  //filterGenres looks at the input field every time it is changed and 
  //compares the input string to the all elements in the genres array.
  const filterGenres = (input) => {
    //Search algorithm will return true to any txt parameter,
    //that contains the pattern (in this case the contents of
    //genreFilter input field)
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
          return true;
      }
    }
    
    let newGenres = [];

    if (!input) {
      for (let i = 0; i < genres.length; i++) {
        let thisGenre = genres[i];
        thisGenre.isFiltered = true;
        newGenres.push (thisGenre);
      };
      setGenres(newGenres)

    } else {
      for (let i = 0; i < genres.length; i++) {
        let thisGenre = genres[i];
        thisGenre.isFiltered = false;
        if (search(genres[i].name, input)) {
          thisGenre.isFiltered = true;
        }
        newGenres.push (thisGenre)
      };
      setGenres(newGenres)
    };
  };

  //SUGGESTION Specific functions

  //SEED Specific functions

  const generateSuggestions = (genres) => {
    getRecommendations(genres);
  };

  //SEARCH Specific functions
  const searchTracks = async (input) => {
    const response = await getSearch(input);
    await setSearchedTracks(response);
  };

  return (

    <div className="app">
      { (token === '') ? <Login/> : <WebPlayback token={token} /> }
      <Criteria 
      genres={genres}
      selectedGenres={selectedGenres}
      selectGenre={selectGenre}
      removeGenre={removeGenre}
      filterGenres={filterGenres}
      />    
      <Search 
      searchTracks={searchTracks}
      searchedTracks={searchedTracks}
      />
      <Seeds 
      selectedTracks={selectedTracks}
      />  
    </div>
  )
};


/* <Suggestion 
generateSuggestions={generateSuggestions}
electedGenres={selectedGenres}
/> */
export default App;
