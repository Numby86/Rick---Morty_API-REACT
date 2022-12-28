//import { useState } from "react";

const CallApi = () => {

    const turnPages = 1;
    //const [turnPages, setTurnPages] = useState(1);

    return fetch(`https://rickandmortyapi.com/api/character/?page=${turnPages}`)
    .then((res) => res.json())
    .then((res) => {
        const myData = [ ...res.results ];
        return myData;
    });
};

export default CallApi;