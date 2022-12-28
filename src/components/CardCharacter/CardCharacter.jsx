import React from "react";
import "./CardCharacter.scss";

function CardCharacter({ allCharacters }) {
  return (
    <>
      <div className="card">
        {allCharacters.map((item) => {
          if (item.id === 20) {
            return (
              <div key={JSON.stringify(item)}>
                <img src={item.image} alt="imagen personaje" />
                <h2>{item.name}</h2>
                <p>Genero: {item.gender}</p>
                <p>Especie: {item.species}</p>
                <p>Estado: {item.status}</p>
                <p>Tipo: {item.type}</p>
                <p>Origen: {item.origin.name}</p>
                <p>Localizacion: {item.location.name}</p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default CardCharacter;
