import React, { useState, useEffect } from 'react';
import WebPlayback from './WebPlayback'
import Login from './Login'
import Genres from './Criteria/Genres'
import './css/reset.css'
import './css/styles.css'

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();

  }, []);


  return (

    <div className="app">
      <Genres />
    </div>
  );
}


export default App;
