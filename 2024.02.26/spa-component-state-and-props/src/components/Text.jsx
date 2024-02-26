// The Text Component receives the count state variable from the App Component.
function Text({ count }) {
  // className contains the class based on the "count" state variable.
  const className = count > 5 ? "backgroundOlive" : "";

  // Render the content of the p element based on the "count" state variable
  return <p className={className}>{count <= 10 ? `The current count is: ${count}` : `Count is bigger than 10`}</p>;
}

export default Text;
