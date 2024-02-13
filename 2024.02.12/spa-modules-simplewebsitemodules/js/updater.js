import { day, month, year, output } from "./elements.js";

function checkValid() {
  // Check the HTML element validity
  if (!day.validity.valid) {
    return false;
  }
  if (!month.validity.valid) {
    return false;
  }
  if (!year.validity.valid) {
    return false;
  }

  return true;
}

function update() {
  // Guard clause to validate user inputs
  if (!checkValid()) {
    return;
  }

  // Nothing better than Datetimes in JS :)
  const date = new Date(0);
  date.setUTCFullYear(year.value);
  date.setUTCMonth(month.value - 1);
  date.setUTCDate(day.value);

  output.innerText = date.toISOString();
}

// ???
export default update; // default export
