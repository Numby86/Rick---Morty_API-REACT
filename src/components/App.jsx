import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import callApi from "../services/callApi.js";

import "../styles/App.scss";
import AllCharacters from "./AllCharacters/AllCharacters";
import CardCharacter from "./CardCharacter/CardCharacter.jsx";
import Gender from "./filters/Gender/Gender.jsx";
import Form from "./Formulario/Formulario.jsx";
import ErrorMorty from "./ErrorMorty/ErrorMorty.jsx";

function App() {
  const [allCharacters, setAllCharacters] = useState([]);

  const [gender, setGender] = useState('All');


  useEffect(() => {
    callApi().then((res) => setAllCharacters(res));
  }, []);

  const handleGender = (value) => {
    setGender(value);
  };
  const filterData = allCharacters.filter((element) => {
    if(gender === 'All'){
      return true;
    }
    else{
      return element.gender === gender;
    }
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
        <h1>Rick & Morty API</h1>
        } />
        <Route path="/list" element={<><Gender gender={gender} handleGender={handleGender} /><AllCharacters all={filterData} />
        </>} />
        <Route path="/card/:id" element={<CardCharacter allCharacters={allCharacters} />} />
      <Route path="/form" element={<Form />} />
      <Route path="*" element={<ErrorMorty />} />
      </Routes>
      </div>
  );
}

export default App;
