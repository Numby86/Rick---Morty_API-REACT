import React from "react";
import { Link } from "react-router-dom";
import "./Character.scss";

function Character({ character }) {



  return (
    <li className="personaje">
      <Link className="links" to={`/card/${character.id}`} >
        <h2>
          {character.id} - {character.name}
        </h2>
      </Link>
    </li>
  );
}
export default Character;
