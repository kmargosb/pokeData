//  ------------ Variables ------------

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(randomInt(1, 265))


document.addEventListener('DOMContentLoaded', function(){
    const random = randomInt(1, 265);
    fetchData(random)
})

// ------------ Fetch ---------------

const fetchData = async (id) => {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }    
}




// .then(response => response.json())
// .then(data => {

//     let $pokeCards = document.querySelector('.card');
//     $pokeCards.innerHTML = 
//     `
//     <h3>${data.name}</h3><p>${data.order}</p>
//     <img src="${data.sprites.front_shiny}" />
//     `
// })
// .catch(err=>console.log(err))