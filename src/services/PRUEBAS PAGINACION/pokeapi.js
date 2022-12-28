// let offset = 0;

// const divButton = document.createElement("div");
// divButton.classList.add("div-buttons");
// let btnNext = document.createElement("buton");
// btnNext.classList.add("next");
// let btnPrevius = document.createElement("buton");
// btnPrevius.classList.add("previus");
// // EVENTO QUE EXPORTO
// function eventPoke() {
//   pokeList$$.addEventListener("click", () => {
//     getPokemons(offset);
//   });
// }
// // LLAMADA A LA API CON LA URL DECLARADA Y QUE LE PUEDA CAMBIAR EL OFFSET DESPUES CON LOS BOTONES
// const getPokemons = async (offset) => {
//   let urlPokemon = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=30`;
//   const response = await fetch(urlPokemon);
//   const result = await response.json();
//   createPokemons(result.results);
// };
// // CREO BOTTONES Y CON EVENTOS AUMENTAN O DISMINUYEN EL OFFSET Y HAGO DESAPARECER EL DE PREVIUS EN LA PRIMERA PAGINA AL VOLVER
// btnNext.addEventListener("click", () => {
//   offset += 30;
//   getPokemons(offset);
//   btnPrevius.textContent = "PREVIUS";
//   divButton.appendChild(btnPrevius);
// });
// btnPrevius.addEventListener("click", () => {
//   if (offset <= 30) {
//     offset -= 30;
//     getPokemons(offset);
//     divButton.removeChild(btnPrevius);
//   } else {
//     offset -= 30;
//     getPokemons(offset);
//   }
// });