const getCharacter = (id) => {

    return fetch(`https://rickandmortyapi.com/api/character/=${id}`)
    .then((res) => res.json())
    .then((res) => {
        const myData = [ ...res.results];

        //!Aquí me pone que res.results no es iterable
        return myData;
    });
};

export default getCharacter;