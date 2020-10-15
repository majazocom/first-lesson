//Function declaration

function sayHi() {
    document.write('Hi! ');
}

//Call the function

sayHi();

//Function expression

const sayHello = function() {
    document.write('Hello! ');
}

//Call the function
sayHello();

//Function with parameters


const lift = function(person1, person2) {
    document.write(person1 + ' & ' + person2 + ' came up to the top. <br>');
}

lift("Hasse", "Lennart");

//Parameters with default values
const greet = function(name = 'Berra', time = 'day') {
    document.write('Good ' + time + ' ' + name + '<br>');
}

greet();

//Function with javascript identifiers (${value})
const greet2 = function(name = 'Berra', time = 'day') {
    document.write(`<h1>Good ${time} ${name} this is rendered as a regular string</h1>`);
}

greet2();

const renderImage = function() {
        // När någon klickat på knappen då ska 
        // ett pokemonnamn dyka upp
        document.querySelector('#currentPokemon').innerHTML = 
        pokemons[0];
        //debugger;
}

//Skapa event listener till vår knapp

document.querySelector('#btn').addEventListener('click', renderImage);





const add = function(a, b) {
    return a + b;
 }
 
const aAndB = add(1, 2);

const addStuff = function(amount) {
    let result = amount - aAndB;
    return result;
}

const quickMath = addStuff(13);
console.log(quickMath);

// ------------------------------------------------



const sub = function(first, second, third){
    let result = first - second - third;
    return result;
}

const apa = sub(1, 5, 10);

console.log(apa);









//Lista med pokemons
let pokemons = [
    '<img src="https://i.pinimg.com/736x/6f/aa/74/6faa74e32ce5f00f2dbc9c0b095cda52.jpg" alt="Bulbasaur" width="200" height="200">', //0
    'Squirtle',  //1
    'Ekans',     //2
    'Vulpix',    //3
    'Charmander', //4
    'Pikachu'
];

//Declared variable fruit
let fruit = 'lemon';

console.log(fruit);
fruit = 'strawberry';
console.log(fruit);
fruit = 'pear';
console.log(fruit);
fruit = 'apple';
console.log(fruit);

//Variable as parameter in function
const fruitBasket = function(frukt) {
    console.log('this is the fruit: ' + frukt);
}

fruitBasket(fruit);

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

console.log(fruit + " last value");