import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import callApi from "../services/callApi.js";

import "../styles/App.scss";
import AllCharacters from "./AllCharacters/AllCharacters";
import CardCharacter from "./CardCharacter/CardCharacter.jsx";
import Gender from "./filters/Gender/Gender.jsx";
import MiniCard from "./MiniCard/MiniCard.jsx";
import Form from "./Formulario/Formulario.jsx";
import ErrorMorty from "./ErrorMorty/ErrorMorty.jsx";
import axios from "axios";


function App() {

  const [allCharacters, setAllCharacters] = useState([]);

  const [numPage, setNumPage] = useState(1);
  const nextPage = () => {
    setNumPage(numPage + 1);
  }
  const prevPage = () => {
    if(numPage > 1){
      setNumPage(numPage - 1);
    }
  }

  useEffect(() => {
    callApi(numPage).then((res) => {
      setAllCharacters(res);
    });
  }, [numPage]);

  const [gender, setGender] = useState("All");
  const handleGender = (value) => {
    setGender(value);
  };
  const filterData = allCharacters.filter((element) => {
    if (gender === "All") {
      return true;
    } else {
      return element.gender === gender;
    }
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Rick & Morty API</h1>} />
        <Route
          path="/list"
          element={
            <>
              <AllCharacters all={allCharacters} numPage={numPage} nextPage={nextPage} prevPage={prevPage}/>
            </>
          }
        />
        <Route
          path="/card/:id"
          element={<CardCharacter allCharacters={allCharacters} />}
        />

        <Route path="/miniCard" element={ <>
        <Gender gender={gender} handleGender={handleGender} />
        <MiniCard allCharacters={filterData} />
        </>
        } />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<ErrorMorty />} />
      </Routes>
    </div>
  );
}

export default App;
