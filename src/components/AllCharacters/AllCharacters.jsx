import React from "react";
import Character from "../Character/Character.jsx";

function AllCharacters({ all }) {
    const listCharacters = all.map((character, index) => {
        return <Character character={character} key={index}/>
    });
    return (
        <div>
            <ul className="all">
                {listCharacters}
            </ul>
            <button className="button" >NEXT</button>
        </div>
    )
}
export default AllCharacters;