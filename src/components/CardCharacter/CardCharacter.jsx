import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../Button/Button";
import "./CardCharacter.scss";

function CardCharacter({ allCharacters }) {

  const params = useParams();

  const foundCharacter = allCharacters.find((element) => element.id === parseInt(params.id));

  return (
    <>
      <div className="card">
                <img src={foundCharacter.image} alt="imagen personaje" />
                <h2>{foundCharacter.name}</h2>
                <p>Gender: {foundCharacter.gender}</p>
                <p>Specie: {foundCharacter.species}</p>
                <p>Status: {foundCharacter.status}</p>
                <p>Type: {foundCharacter.type}</p>
                <p>Origin: {foundCharacter.origin.name}</p>
                <p>Location: {foundCharacter.location.name}</p>
      </div>
      <Link to='/list'>
      <Button texto={'BACK TO LIST'} />
      </Link>
      
    </>
  );
}

export default CardCharacter;


