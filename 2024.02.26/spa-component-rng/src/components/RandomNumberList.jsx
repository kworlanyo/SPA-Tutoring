import RandomNumber from "./RandomNumber";

// The RandomNumberList Component receives the randomNumbers array prop from the App component
// The component then uses the map method to iterate through the array
function RandomNumberList({ randomNumbers }) {
  return (
    <div className="container">
      {randomNumbers.map((randomNumber, i) => {
        return <RandomNumber randomNumber={randomNumber} key={i} />;
      })}
    </div>
  );
}

export default RandomNumberList;
