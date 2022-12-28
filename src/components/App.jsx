import React from 'react';
import { useEffect, useState } from 'react';
import CallApi from '../services/CallApi.jsx';

import '../styles/App.scss';
import AllCharacters from './AllCharacters/AllCharacters';
import CardCharacter from './CardCharacter/CardCharacter.jsx';
import Form from './Formulario/Formulario.jsx';

function App() {

  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    CallApi().then((res) => setAllCharacters(res));
  }, []);

  return (
    <div className="App">
    <h1>Rick & Morty API</h1>
    {/* <AllCharacters all={allCharacters}/> */}
    {/* <CardCharacter allCharacters={allCharacters}/> */}
    <Form />
    </div>
  );
}

export default App;
