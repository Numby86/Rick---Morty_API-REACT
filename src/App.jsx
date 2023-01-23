import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import callApi from "./services/callApi.js";
import "./styles/App.scss";

import Form from "./components/Form/Form.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Posts from "./views/Coments/Posts.jsx";
import AllCharacters from "./views/AllCharacters/AllCharacters.jsx";
import CardCharacter from "./views/CardCharacter/CardCharacter.jsx";
import Gender from "./views/Gender/Gender.jsx";
import MiniCard from "./views/MiniCard/MiniCard.jsx";
import ErrorMorty from "./views/ErrorMorty/ErrorMorty.jsx";
import HomeExtra from "./views/HomeExtra/HomeExtra.jsx";
import Register from "./views/User/Register.jsx";
import Login from "./views/User/Login.jsx";

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [gender, setGender] = useState("All");
  const [numPage, setNumPage] = useState(1);

  const nextPage = () => {
    setNumPage(numPage + 1);
  };
  const prevPage = () => {
    if (numPage > 1) {
      setNumPage(numPage - 1);
    }
  };

  useEffect(() => {
    callApi(numPage).then((res) => {
      setAllCharacters(res);
    });
  }, [numPage]);

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
        <Route
          path="/"
          element={
            <>
              <h1 className="rick">Rick & Morty API</h1>{" "}
            </>
          }
        />
        <Route
          path="/list"
          element={
            <>
              <AllCharacters
                all={allCharacters}
                numPage={numPage}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            </>
          }
        />
        <Route
          path="/card/:id"
          element={<CardCharacter allCharacters={allCharacters} />}
        />
        <Route
          path="/minicard"
          element={
            <>
              <Gender gender={gender} handleGender={handleGender} />
              <MiniCard
                allCharacters={filterData}
                numPage={numPage}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            </>
          }
        />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/form" element={<Form />} />
        <Route path="/home" element={<HomeExtra />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<ErrorMorty />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
