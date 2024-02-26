import { useState } from "react";
import Button from "./components/Button"; // import Button component
import RandomNumberList from "./components/RandomNumberList"; // import RandomNumberList component

function App() {
  const [randomNumbers, setRandomNumbers] = useState([]); // It is like writing "const randomNumbers = []" in vanilla JavaScript.

  // this function is the event handler that will fire when the button is clicked
  function handleClick() {
    // generate random numbers
    const random = Math.floor(Math.random() * 100) + 1;

    // this changes the randomNumbers array
    setRandomNumbers([...randomNumbers, random]);
    // console.log(random);
  }

  return (
    <>
      <h1>Random Number Generator</h1>
      <Button onClick={handleClick} /> {/* the event handler function is sent as a prop to the button component */}
      <RandomNumberList randomNumbers={randomNumbers} /> {/* the randomNumbers array is sent as prop to the RandomNumberList component */}
    </>
  );
}

export default App;
