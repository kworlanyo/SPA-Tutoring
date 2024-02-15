// Various HTML elements are selected and stored in variables using document.querySelector and document.getElementById.
const error = document.querySelector(".error");
const form = document.querySelector("form");
const input = document.getElementById("text");
const pokemonStatistics = document.getElementById("pokemon-statistics");
const nameOfPokemon = document.getElementById("name");
const pokemonImage = document.getElementById("pokemon-image");
const statsTitle = document.getElementById("stats-title");
const statsContent = document.getElementById("stats-content");
const abilitiesDiv = document.getElementById("abilitiesDiv");
const abilitiesTitle = document.getElementById("abilities");
const abilitiesContent = document.getElementById("abilities-content");

form.addEventListener("submit", (e) => {
  // an event listener with type submit is added to the form so that when the user submits the form, the callback function will run.
  e.preventDefault(); // this prevents the form from reloading.
  // if the input is empty, we add a message to the error element prompting the user to enter a pokemon name.
  if (input.value === "") {
    error.textContent = "Please enter a pokemon name";
  } else {
    error.textContent = ""; // if the user enters data in the input, we reset the error element to empty string, if the error element is showing any information.
    fetch(`https://pokeapi.co/api/v2/pokemon/${input.value.toLowerCase()}`) // we use fetch method to get data from the pokemon API and we use the user input's value to complete the url in order to get the data.
      .then((responseObj) => {
        // the data is received in a response object. We check if the response object ok property is true or false.
        if (responseObj.ok) {
          return responseObj.json(); // if the response object ok property is true, we parse the response object into a javascript code using the json method. We then return it.
        } else {
          throw new Error("Request Unsuccessful"); // if the response object ok property is false, we throw an error to the user.
        }
      })
      .then((data) => {
        // After parsing the data into javascript code, we can now use it here.
        pokemonStatistics.style.display = "flex"; // in the css, the display of the pokemonStatistics element is set to "none" when the page reloads. We set it back to flex here when the form is submitted.
        nameOfPokemon.textContent = data.name.toUpperCase(); // we give the value of the name property of the data to the nameOfPokemon element.
        pokemonImage.src = data.sprites.front_default; // we give the value of the data.sprites.front_default property to src attribute of the pokemonImage element.

        statsTitle.textContent = "Stats"; // We hard code a name for the statsTitle element.
        const stats = data.stats; // We create a variable called "stats" and we assign the data.stats (which is an array) to the variable.

        statsContent.innerHTML = ""; // We reassigned an empty string to the innerHTML content of the statsContent element. So this will remove all html elements from statsContent element and populate new data anytime the user enters a pokemon name and submits it.

        stats.forEach((obj) => {
          // we loop through the stats array to get data from it.
          // In the loop, we create new elements
          const newDiv = document.createElement("div");
          const statNameTag = document.createElement("p");
          const statValueTag = document.createElement("p");

          // We then assign the various values that we need from the data to the elements that we have created.
          statNameTag.textContent = obj.stat.name;
          statValueTag.textContent = obj.base_stat;

          // We then append the elements to the div that we created.
          newDiv.append(statNameTag, statValueTag);

          newDiv.className = "stat-item"; // We add a class from the css file to the div we created.
          // We then append the div to the statsContent element
          statsContent.append(newDiv);
        });

        abilitiesTitle.textContent = "Abilities"; // We hard code a name for the abilitiesTitle element.
        const abilities = data.abilities; // We create a variable called "abilities" and we assign the data.stats (which is an array) to the variable.
        abilitiesContent.innerHTML = ""; // We reassigned an empty string to the innerHTML content of the abilitiesContent element. So this will remove all html elements from abilitiesContent element and populate new data anytime the user enters a pokemon name and submits it.

        abilities.forEach((obj) => {
          // we loop through the abilities array to get data from it.
          // In the loop, we create a new element.
          const abilitiesTag = document.createElement("p");
          // We then assign the value that we need from the data to the element that we have created.
          abilitiesTag.textContent = obj.ability.name;
          // We then append the element to the abilitiesContent element.
          abilitiesContent.append(abilitiesTag);
        });
      })
      .catch((err) => {
        // We catch errors here and show it to the user if there was a problem during the fetching of the data from the API.
        error.textContent = `${err}.\nThere is no pokemon with that name`;
      });
  }

  input.value = ""; // we reset the input value back to an empty string when the user has submitted the form.
});
