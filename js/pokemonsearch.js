//Add eventlistener to the button
document.getElementById("search-button").addEventListener('click', () => {
    //Get the value from the input - save into variable
    console.log(fetch('../assets/pokemon.json'));

    fetch('../assets/pokemon.json')
        .then(data => data.json())
        .then(data => {
            console.log('Success: ', data)
        })
        .catch((error) => {
            console.log('Error: ', error);
        })
})

