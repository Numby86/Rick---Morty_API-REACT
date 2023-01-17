import React from "react";
import "./AllCharacters.scss";
import { Link } from "react-router-dom";

function AllCharacters({ all, numPage, prevPage, nextPage }) {

  
  return (
    <div>
      <ul>
        {all.map((item, id) => (
          <li className="personaje" key={id}>
            <Link className="links" to={`/card/${item.id}`}>
              <h2>
                {item.id} - {item.name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
      <div className="divButtons">
      <button className={numPage > 1 ? 'button' : 'none'} onClick={prevPage}>
      PREVIUS
    </button>
        <button className="button" onClick={nextPage}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default AllCharacters;
