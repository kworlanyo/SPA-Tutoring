import { useState } from "react";

function Room() {
  const [lightOn, setLightOn] = useState(true);

  function handleClick() {
    setLightOn(!lightOn);
  }
  // console.log(lightOn);

  return (
    <>
      {/* The class for the div is assigned based on the value in the lightOn State Variable */}
      <div className={lightOn ? "lit" : "dark"}>
        {lightOn ? <p>The room is lit</p> : <p>The room is dark</p>} {/* The p element is rendered based on the lightOn state variable */}
        <button onClick={handleClick}>Light switch</button>
      </div>
    </>
  );
}

export default Room;
