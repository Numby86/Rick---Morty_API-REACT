import React from 'react';
import Character from "../../views/Character/Character.jsx";
import './MiniCard.scss';

const MiniCard = ({ allCharacters, numPage, nextPage, prevPage }) => {

      const listCharacters = allCharacters.map((character, index) => {
        return <Character character={character} key={index}/>
    });
    return (
        <div>
            <ul>
                {listCharacters}
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
    )
}
  


//   return (
//     <div>
//       <ul className='miniCard'>
//         {allCharacters.map((item, id) => (
//           <li key={id}>{item.name}</li>
//         ))}
//       </ul>

//     </div>
//   )
// }

export default MiniCard
