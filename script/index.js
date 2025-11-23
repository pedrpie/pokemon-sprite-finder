async function fetchData() {
    try{
        const pokemonName = document.querySelector("#pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok){
            throw new Error("Could not fetch resource")
        }

        const data = await response.json();
        console.log(data)

        const pokemonSprite = data.sprites.front_default;
        const pokemonImg = document.querySelector("#pokemonSprite")
        pokemonImg.src = pokemonSprite;
        pokemonImg.style.display = "block"

        const pokeName = data.name;
        const pokemonNameDisplay = document.querySelector("#pokemonNameDisplay");
        pokemonNameDisplay.textContent = pokeName;
    }
    catch(error){
        console.log(error);
        alert("Invalid name");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const pokemonNameInput = document.querySelector("#pokemonName")
    pokemonNameInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter"){
            fetchData();
        }
    })
})