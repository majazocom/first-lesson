//Add eventlistener to the button
let pokemons;

//här hämtar vi all data från vår json-fil
let fetchStuff = () => {
    fetch('../assets/pokemon.json')
    .then(response => response.json()) //här gör vi om vår respons till objekt
    .then(data => {
        //här stoppar vi in resultatet i vår pokemon-variabel
        pokemons = data.pokemons

    })
    .catch((error) => {
        console.log('Error: ', error);
    });
}

fetchStuff(); //kallar vi på vår fetch-metod.

document.getElementById("search-button").addEventListener('click', () => {
    //Get the value from the input - save into variable
    let input = document.getElementById('search-input').value;

    for (let i = 0; i < pokemons.length; i++) {
        
        if (pokemons[i].name === input.toLowerCase()) {
            console.log('true');
        }
    }

    // if (pokemons.some(pokemon => pokemon.name === input.toLowerCase())) {
    //     console.log('true');
    // }

});