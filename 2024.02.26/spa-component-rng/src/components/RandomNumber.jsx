// The RandomNumber component receives the prop "randomNumber" from RandomNumberList component and renders it
function RandomNumber({ randomNumber }) {
  return <div className="random-number">{randomNumber}</div>;
}

export default RandomNumber;
