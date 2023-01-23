import React from "react";
import "./Character.scss";

function Character({ character }) {
  return (
    <li className="list">
        <div className="characterDiv">
        <div>
          <img  src={character.image} alt='minicardCharacter'/>
          <p>{character.id} - {character.name}</p>
          <p className={character.status}>{character.status}</p>
        </div>
        </div>
    </li>
  );
}
export default Character;
