import React from "react";
//import CardCharacter from "../CardCharacter/CardCharacter";
import "./Character.scss";

function Character({ character }) {

  // const cardCharacter = () => {
  //   return <CardCharacter />
  // }

  return (
    <li className="personaje">
      <h2>
        {character.id} - {character.name}
      </h2>
    </li>
  );
}
export default Character;
