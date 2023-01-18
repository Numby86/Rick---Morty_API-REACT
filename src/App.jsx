import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import callApi from "./services/callApi.js";

import "./styles/App.scss";
import Home from './views/HomeViews/Home.jsx';
import AllCharacters from "./views/AllCharacters/AllCharacters";
import CardCharacter from "./views/CardCharacter/CardCharacter.jsx";
import Gender from "./views/Gender/Gender.jsx";
import MiniCard from "./views/MiniCard/MiniCard.jsx";
import Form from "./components/Formulario/Form.jsx";
import ErrorMorty from "./views/ErrorMorty/ErrorMorty.jsx";

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
          element={<CardCharacter allCharacters={allCharacters}  />}
        />

        <Route path="/miniCard" element={ <>
        <Gender gender={gender} handleGender={handleGender} />
        <MiniCard allCharacters={filterData} numPage={numPage} nextPage={nextPage} prevPage={prevPage} />
        </>
        } />
        <Route path="/form" element={<Form />} />
        <Route path="/homeviews" element={<Home />} />
        <Route path="*" element={<ErrorMorty />} />
      </Routes>
    </div>
  );
}

export default App;
