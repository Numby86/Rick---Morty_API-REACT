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
<<<<<<< HEAD
=======
import Form from "./components/Form/Form.jsx";
>>>>>>> 70fae9a1a879ca383d73bb5155f4b5bfa2cf13f0
import ErrorMorty from "./views/ErrorMorty/ErrorMorty.jsx";
import HomeExtra from "./views/HomeExtra/HomeExtra.jsx";
import Register from "./views/User/Register.jsx";
import Login from "./views/User/Login.jsx";

function App() {
  // variable de estado para nuestros personajes
  const [allCharacters, setAllCharacters] = useState([]);
  // variable para filtrar por genero
  const [gender, setGender] = useState("All");
  // variable para nuestra paginaciom
  const [numPage, setNumPage] = useState(1);
  // funcion para pasar pagina
  const nextPage = () => {
    setNumPage(numPage + 1);
  };
  // funcion para volver atras pero con condicion q sea mayor q uno, para q si llega a la pagina 1 ya no te deje ir mas atras
  const prevPage = () => {
    if (numPage > 1) {
      setNumPage(numPage - 1);
    }
  };
  // llamada a la api q cambia cada vez q cambias de pagina
  useEffect(() => {
    callApi(numPage).then((res) => {
      setAllCharacters(res);
    });
  }, [numPage]);
  // funciones para filtrar personajes por genero
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
<<<<<<< HEAD
        <Route path="/posts" element={<Posts />} />
=======
        <Route path="/homeviews" element={<Home />} />
>>>>>>> 70fae9a1a879ca383d73bb5155f4b5bfa2cf13f0
        <Route path="*" element={<ErrorMorty />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
