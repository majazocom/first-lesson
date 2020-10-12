//Pikachu som objekt
let pikachu = {
    name: 'Pikachu',
    number: 25,
    age: 2
};

document.write(pikachu.age + 20 + " years old" + "<br>");

if (pikachu.age >= 2) {
    document.write("Def is over 2y old" + "<br>");
} else {
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
