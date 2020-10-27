let pokemons = [
    {
        name: 'Bulbasaur',
        id: 1
    },
    {
        name: 'Ivysaur',
        id: 2
    },
    {
        name: 'Venusaur',
        id: 3
    },
    {
        name: 'Charmander',
        id: 4
    },
    {
        name: 'Charmeleon',
        id: 5
    },
    {
        name: 'Charizard',
        id: 6
    },
    {
        name: 'Squirtle',
        id: 7
    },
    {
        name: 'Wartortle',
        id: 8
    },
    {
        name: 'Blastoise',
        id: 9
    },
    {
        name: 'Caterpie',
        id: 10
    },
    {
        name: 'Metapod',
        id: 11
    },
    {
        name: 'Butterfree',
        id: 12
    },
    {
        name: 'Weedle',
        id: 13
    },
    {
        name: 'Kakuna',
        id: 14
    },
    {
        name: 'Beedrill',
        id: 15
    },
    {
        name: 'Pidgey',
        id: 16
    },
    {
        name: 'Pidgeotto',
        id: 17
    },
    {
        name: 'Pidgeot',
        id: 18
    },
    {
        name: 'Rattata',
        id: 19
    },
    {
        name: 'Raticate',
        id: 20
    },
    {
        name: 'Spearow',
        id: 21
    },
    {
        name: 'Fearow',
        id: 22
    },
    {
        name: 'Ekans',
        id: 23
    },
    {
        name: 'Arbok',
        id: 24
    },
    {
        name: 'Pikachu',
        id: 25
    },
    {
        name: 'Raichu',
        id: 26
    },
    {
        name: 'Sandshrew',
        id: 27
    },
    {
        name: 'Sandslash',
        id: 28
    },
    {
        name: 'Nidoran (F)',
        id: 29
    },
    {
        name: 'Nidorina',
        id: 30
    },
    {
        name: 'Nidoqueen',
        id: 31
    },
    {
        name: 'Nidoran (M)',
        id: 32
    },
    {
        name: 'Nidoking',
        id: 33
    },
    {
        name: 'Clefairy',
        id: 34
    },
]

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

