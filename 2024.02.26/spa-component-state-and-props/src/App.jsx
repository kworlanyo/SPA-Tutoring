import { useState } from "react";
import Text from "./components/Text";

function App() {
  const [count, setCount] = useState(0); // let count = 0

  // This function is the event handler that is will passed to the onClick event listener on the button element
  function handleIncrement() {
    setCount(count + 1);
  }

  // console.log(count);

  return (
    <>
      <Text count={count} /> {/* this is like calling a function and giving it arguments*/}
      <button onClick={handleIncrement}>Increment Count</button>
    </>
  );
}

export default App;
