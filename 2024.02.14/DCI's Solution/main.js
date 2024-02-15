const input = document.querySelector("#input");
const btn = document.querySelector("button");
const pokemonElement = document.createElement("div"); // Creates a new div element, which will be used to display information about the searched Pokémon.

function fetchData(e) {
  e.preventDefault(); // Prevents the default form submission behavior.

  // Checks if the input field is empty. If so, it sets a red border and a placeholder indicating that nothing was entered.
  if (!input.value) {
    input.style.border = "1px solid red";
    input.setAttribute("placeholder", "nothing entered");
    return;
  }

  // If there is input, it constructs a URL to fetch Pokémon data from the PokeAPI using the input value.
  const userInput = input.value.toLowerCase();
  input.value = "";

  const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`;

  // This makes a fetch request to the PokeAPI and handles the response. If the response is successful, it parses the JSON response and calls the displayData function with the relevant Pokémon information. If there is an error, it catches the error and updates the input placeholder to indicate that the Pokémon was not found.
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("response was not ok.");
      }
    })
    .then((data) => {
      // An object is created with the data need from the pokemon API
      // The object is then passed as an argument inside the displayData function
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

function displayData(obj) {
  const pokemonContainer = document.querySelector(".pokemon-container");

  // This checks if there are existing children in the container. If so, it removes the pokemonElement from the container.
  if (pokemonContainer.children.length > 0) {
    pokemonContainer.removeChild(pokemonElement);
  }

  // This code constructs HTML content using innerHTML and then uses the provided Pokémon data (obj) and appends it to the pokemonElement.
  //* NB: With innerHTML, you can write the HTML elements as if you are in a html file.
  pokemonElement.innerHTML = `<h2>${obj.name}</h2>
  <img src="${obj.imgFront}"/>
            <h3>stats</h3>
        <ul>
      ${obj.stats.map((stat) => `<li class='stat'><span>${stat.stat.name}</span><span>${stat.base_stat}</span></li>`).join("")}
            </ul>
            <h3>abilities</h3>
        <ul>
        ${obj.abilities.map((power) => `<li class='ability'>${power.ability.name}</li>`).join("")}
        </ul>`;

  // This then appends the pokemonElement to the pokemonContainer.
  pokemonContainer.appendChild(pokemonElement);
}

// This adds the class "pokemon-element" from the css to the pokemonElement
pokemonElement.classList.add("pokemon-element");

// This adds an event listener for the focus event on the input field. When the input is focused, it changes the input's placeholder and border styles.
input.onfocus = () => {
  input.setAttribute("placeholder", "search pokemon ...");
  input.style.border = "1px solid rgb(255, 153, 0)";
};

// This adds an event listener to the button. When the button is clicked, it triggers the fetchData function.
btn.addEventListener("click", fetchData);
