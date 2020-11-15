let pokemon = {
    name: 'Eevee',
    id: 133,
    fullInfo: function () {
        return `${this.name} ${this.id}`
        //return this.name + ' ' + this.id
    }
}

let pokemon2 = {
    name: 'Eevee',
    id: 133,
    fullInfo: function () {
        return `${this.name} ${this.id}`
        //return this.name + ' ' + this.id
    }
}

let pokemons2 = [
    {
        name: 'Eevee',
        id: 133,
        fullInfo: function () {
            return `${this.name} ${this.id}`
            //return this.name + ' ' + this.id
        }
    },
    {
        name: 'Eevee',
        id: 133,
        fullInfo: function () {
            return `${this.name} ${this.id}`
            //return this.name + ' ' + this.id
        }
    }
]

console.log(pokemons2[0].fullInfo());

let date = new Date();

console.log(date);

let months = [ 'januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];

console.log(months[date.getMonth()]);




//Add eventlistener to the button
document.getElementById("search-button").addEventListener('click', () => {
    //Get the value from the input - save into variable

    let input = document.getElementById("search-input").value;
    console.log(input);
    //Matcha input mot pokemon.name

    let result = pokemons.find((obj) => {
        if (obj.name === input) {
            return true;
        }
    })

    if (result) {
        //If match -> render "We got a match" in HTML
        document.getElementById('search-result').innerHTML = 'We got a match: ' + result.name;
    } else {
        //If not -> render "Type a Pokemon from the first gen id 1-34"
        document.write('Type a Pokemon from the first gen id 1-34');
    }
})

