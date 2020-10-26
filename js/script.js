
document.addEventListener('click', function(e) {
    //The code that will be executed on click
    //save button element as a variable
    let btn = document.getElementById('btn');

    //check if the click is on the button
    if (e.target == btn) {
        document.write("TRUE");
    }

});

let myPokemon = "";

const chosenPokemon = () => {
    myPokemon = document.getElementById('pokemon-input').value;
    document.getElementById('chosenPokemon').innerHTML = "You have chosen: " + myPokemon;
};

document.getElementById('submit-btn').addEventListener('click', chosenPokemon);



let isEven = (number) => {
    //Check if something is even
    number % 2 === 0;
}

let array = [1, 2, 3, 4, 5, 6];
























//Lista med pokemons
let pokemons = [
    '<img src="https://i.pinimg.com/736x/6f/aa/74/6faa74e32ce5f00f2dbc9c0b095cda52.jpg" alt="Bulbasaur" width="200" height="200">', //0
    'Squirtle',   //1
    'Ekans',      //2
    'Vulpix',     //3
    'Charmander', //4
    'Pikachu'     //5
];

let newArray = new Array('Hej', 'Hejsan', 'Tja');

console.log(newArray.length);

let pokemonObjects = []

let pokemonNumbers = [
    1, 2, 3, 4, 5
]

//Pikachu som objekt
let pikachu = {
    name: 'Pikachu',
    number: 25,
    age: 2,
    isAwesome: true
};

//Checka om pikachu är awesome
if (pikachu.isAwesome) {
    document.write("<br> Pikachu surely is awesome <br>");
}

document.write(pikachu.age + 20 + " years old" + "<br>");


if (pikachu.age <= 2) {
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

