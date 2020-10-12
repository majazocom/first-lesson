//Skapa event listener till vår knapp

document.getElementById('btn').addEventListener('click', 
    function() {
        // När någon klickat på knappen då ska 
        // ett pokemonnamn dyka upp
        document.getElementById('currentPokemon').innerHTML = 
        pokemons[0];
    }
)

//Lista med pokemons
let pokemons = [
    '<img src="https://i.pinimg.com/736x/6f/aa/74/6faa74e32ce5f00f2dbc9c0b095cda52.jpg" alt="Girl in a jacket" width="200" height="200">', //0
    'Squirtle',  //1
    'Ekans',     //2
    'Vulpix',    //3
    'Charmander', //4
    'Pikachu'
];

//Pikachu som objekt
let pikachu = {
    name: 'Pikachu',
    number: 25,
    age: 2,
    isAwesome: true
};

//Checka om pikachu är awesome
if (pikachu.isAwesome) {
    document.write("Pikachu surely is awesome <br>");
}

document.write(pikachu.age + 20 + " years old" + "<br>");


if (pikachu.age >= 2) {
    //Om vår pikachu är äldre eller lika med 2 år
    document.write("Def is over 2y old" + "<br>");
} else {
    //Annars
    document.write("over 2y old" + "<br>");
}

let pokemon = "Raichu";
// Om vår pokemon är Pika - kör koden
if (pokemon == "Pikachu") {
    document.write("<br> Pikachu is here");
} else if (pokemon == "Raichu") {
// Om vår pokemon är Raichu - kör koden
    document.write("<br>Raichu is here");
} else {
    //Om inget av ovanstående är sant - avfyras detta
    document.write("<br>Not Raichu or Pika");
}
