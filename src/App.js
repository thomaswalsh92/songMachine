import React, { useState, useEffect } from 'react';
import WebPlayback from './WebPlayback'
//Front end components
import Login from './Login'
import Genres from './Criteria/Genres'
//import getGenres from './utility/getGenres'
//CSS
import './css/reset.css'
import './css/styles.css'


function App() {

  // selected genres will be a newly compute
  const [selectedGenres, setSelectedGenres] = useState([]); 
  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();

    async function getGenres() {
      const response = await fetch('/api/genres');
      const json = await response.json();
      await console.log (json.genres);
    }

    getGenres();
    


  }, []);


  return (

    <div className="app">
      { (token === '') ? <Login/> : <WebPlayback token={token} /> }
      <Genres />
    </div>
  );
}

export default App;
