//Add eventlistener to the button

document.getElementById("search-button").addEventListener('click', () => {
    //Get the value from the input - save into variable
    console.log(fetch('../assets/pokemon.json'));

    fetch('../assets/pokemon.json')
        .then(response => response.json())
        .catch((error) => {
            console.log('Error: ', error);
        });
});