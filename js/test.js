//Function declaration
sayHi();

function sayHi() {
    document.write('Hi! ');
}

//Call the function

sayHi();

//Function expression

const sayHello = function () {
    document.write('Hello! ');
}

//Call the function
sayHello();

//Function with parameters

// console <- pekar vi mot konsollen
// document <- pekar vi mot vårt dokument 

const lift = function (person1, person2, person3) {
    document.write(person1 + ' & ' + person2 + ' & ' + person3 + ' came up to the top. <br>');
}

lift('Hasse', 'Lennart');

//Parameters with default values
const greet = function (name = 'Berra', time = 'day') {
    document.write('Good ' + time + ' ' + name + '<br>');
}

greet();

//Function with javascript identifiers (${value})
const greet2 = function (name = 'Berra', time = 'day') {
    document.write(`<h1>Good ${time} ${name} this is rendered as a regular string</h1>`);
}

greet2();


//Function with return
const add = function (a, b) {
    return a + b;
}

//Save result of add-function to a const
const aAndB = add(1, 2);

const addStuff = function (amount) {
    let result = amount - aAndB;
    return result;
}

const quickMath = addStuff(13);
console.log(quickMath);


// ------------------------------------------------



const sub = function (first, second, third) {
    let result = first - second - third;
    return result;
}

const apa = sub(1, 5, 10);

console.log(apa);





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
const fruitBasket = function (frukt) {
    console.log('this is the fruit: ' + frukt);
}

fruitBasket(fruit);
console.log(fruit + " last value");