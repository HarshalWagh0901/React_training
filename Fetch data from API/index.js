/*
    fetch = A function used for making HTTP requests to fetch resources.
            - (JSON style data, images, files)
            - Simplifies Asynchromous data fetching in JS and used for interacting with APIs to retrieve and send  data asynchronously over the WEB.
            - fetch(url. {options})
*/

// fetchData();

async function fetchData() {
    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok) {
            throw new Error("Resource not found");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemonImage = document.getElementById("pokemonSprite")

        pokemonImage.src = pokemonSprite;
        pokemonImage.style.display = "block";
    }
    catch(error) {
        console.log(error);
    }
}