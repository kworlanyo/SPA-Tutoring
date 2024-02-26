// The Button component receives the onClick event handler function from the App component and use it inside the onClick event listener of the Button
function Button({ onClick }) {
  return <button onClick={onClick}>Generate Random Number</button>;
}

export default Button;
