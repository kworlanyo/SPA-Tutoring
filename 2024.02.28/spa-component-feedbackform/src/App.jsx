import { useState } from "react";
import "./App.css";
import Input from "./Input";

function App() {
  // Declare a state variable and give an initial value of an object.
  // This variable will store the inputs from the input elements
  const [data, setData] = useState({ title: "", email: "", text: "" });

  // Declare another state variable and assign a boolean value to it.
  // This variable will be toggled by the handleSubmit function when the form is submitted.
  const [submitted, setSubmitted] = useState(false);

  // This is the event handler for all the input elements with the onChange event listener.
  function handleChange(e) {
    // const value = e.target.value
    // const name = e.target.name
    setData({ ...data, [e.target.name]: e.target.value });
  }

  // This is the event handler function for the onSubmit event listener
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(data);
    setData({ title: "", email: "", text: "" });
    setSubmitted(true);
  }

  return (
    <>
      <main>
        <h1>Feedback Form</h1>
        {/* When the submitted state variable is false, the form will be displayed. If the submitted state variable is true, the paragraph element will be displayed. */}
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            {/* The Input Component is imported and placed in the form. The data state variable and the handleChange event handler are sent as props into the Input Component */}
            <Input data={data} onChange={handleChange} />
            <button>Send</button>
          </form>
        ) : (
          <p>Thank you for your feedback</p>
        )}
      </main>
    </>
  );
}

export default App;
