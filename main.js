// //  ------------ Variables ------------

// function randomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(randomInt(1, 265))

// document.addEventListener('DOMContentLoaded', function(){
//     const random = randomInt(1, 265);
//     fetchData(random)
// })

// // ------------ Fetch ---------------

// const fetchData = async (id) => {
//     try{
//         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

const url = "https://pokeapi.co/api/v2/pokemon/";
const $card = document.querySelector(".card");
const $btn = document.querySelector(".btn");

let getPokeData = () => {
  let nro = Math.floor(Math.random() * 260) + 1;
  const finalLink = url + nro;

  // fetch generated url
  fetch(finalLink)
    .then((response) => response.json())
    .then((data) => {
      generateCard(data);
    });
};
$btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);

let generateCard = (data) => {
  console.log(data);
  const $hp = data.stats[0].base_stat;
  const $img = data.sprites.other.dream_world.front_default;
  const $pokeName = data.name;
  const $attack = data.stats[1].base_stat;
  const $defense = data.stats[2].base_stat;
  const $speed = data.stats[5].base_stat;

  $card.innerHTML = `
  <p class="hp">
                <span>HP</span>
                ${$hp}
            </p>
            <img src="${$img}" alt="Imagen de ${$pokeName}">
            <h2 class="poke-name">${$pokeName}</h2>
            <div class="types">
                <span>Type 1</span>
                <span>Type 2</span>
            </div>
            <div class="stats">
                <div>
                    <h3>${$attack}</h3>
                    <p>Attack</p>
                </div>
                <div>
                    <h3>${$defense}</h3>
                    <p>Defense</p>
                </div>
                <div>
                    <h3>${$speed}</h3>
                    <p>Speed</p>
                </div>
            </div>
  `

};
