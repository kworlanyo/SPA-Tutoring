const send = document.querySelector("#send");
const table = document.querySelector("table");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const programmingLanguage = document.querySelector("#programmingLanguage");
const reset = document.querySelector("#reset");
const tableBody = document.querySelector("tbody");

// If there is data in the localStorage, first get it into the array before adding any data again
// or else the data will be overwritten.
// So we use the logical OR to assign an empty array or an array from the local Storage containing data, if there is any.
let developersArray = JSON.parse(localStorage.getItem("devArray")) || [];

send.addEventListener("click", (e) => {
  e.preventDefault();

  // Checks if any input is empty and then logs an alert prompting the user to fill all inputs
  if (firstName.value === "" || lastName.value === "") {
    alert("All fields must be filled");
  } else {
    // Creating a new developer array
    const newDeveloper = {
      firstName: firstName.value,
      lastName: lastName.value,
      programmingLanguage: programmingLanguage.value,
    };

    developersArray.push(newDeveloper); // push to developersArray array

    localStorage.setItem("devArray", JSON.stringify(developersArray)); // send to local storage

    tableBody.innerHTML = ""; // clear the body of the table body. This prevents repetition of data inside the table when rendering the data

    renderHTML(developersArray); // call the renderHTML function to render the data in the table

    // Reset the input values
    firstName.value = "";
    lastName.value = "";
    programmingLanguage.value = "javascript";
  }
});

// This deletes all the data in the local storage
reset.addEventListener("click", () => {
  localStorage.clear();
});

// This function renders the data in the browser
function renderHTML(array) {
  array.forEach((devObj) => {
    const tableRow = document.createElement("tr");
    const firstNameData = document.createElement("td");
    const lastNameData = document.createElement("td");
    const programmingLanguageData = document.createElement("td");

    firstNameData.innerText = devObj.firstName;
    lastNameData.innerText = devObj.lastName;
    programmingLanguageData.innerText = devObj.programmingLanguage;
    tableRow.append(firstNameData, lastNameData, programmingLanguageData);
    tableBody.append(tableRow);
  });
}

// This takes care of the loading of the page
// When the page is loaded, we will render the data that is in the developersArray in the browser using the renderHTML function
document.addEventListener("DOMContentLoaded", () => {
  renderHTML(developersArray);
});
