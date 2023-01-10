

const callApi = () => {

    const turnPages = 3;

    //const [turnPages, setTurnPages] = useState(1);
    // const pagesMas = () => {
    //     return turnPages + 1;
    // }
    

    return fetch(`https://rickandmortyapi.com/api/character/?page=${turnPages}`)
    .then((res) => res.json())
    .then((res) => {
        const myData = [ ...res.results ];
        return myData;
    });
};

export default callApi;