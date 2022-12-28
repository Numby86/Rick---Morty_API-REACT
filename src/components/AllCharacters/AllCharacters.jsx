import Character from "../Character/Character.jsx";

function AllCharacters({ all }) {
    const allCharacters = all.map((character, index) => {
        return <Character character={character} key={index}/>
    });
    return (
        <div>
            <ul className="all">
                {allCharacters}
            </ul>
            <button>NEXT</button>
        </div>
    )
}
export default AllCharacters;