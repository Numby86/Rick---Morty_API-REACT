import React from 'react';
import Character from "../Character/Character.jsx";
import './MiniCard.scss';

const MiniCard = ({ allCharacters }) => {

      const listCharacters = allCharacters.map((character, index) => {
        return <Character character={character} key={index}/>
    });
    return (
        <div>
            <ul>
                {listCharacters}
            </ul>
            
            
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
