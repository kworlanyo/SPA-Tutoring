function fetchData(e) {
  e.preventDefault();

  if (!input.value) {
    input.style.border = "1px solid red";
    input.setAttribute("placeholder", "nothing entered");
    return;
  }

  const userInput = input.value.toLowerCase();
  input.value = "";

  const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("response was not ok.");
      }
    })
    .then((data) => {
      const pokemonObj = {
        name: data.name,
        imgFront: data.sprites.front_default,
        stats: data.stats,
        abilities: data.abilities,
      };
      displayData(pokemonObj);
    })
    .catch((error) => {
      console.log(error);
      input.setAttribute("placeholder", "pokemon not found");
      input.style.border = "1px solid red";
    });
}
