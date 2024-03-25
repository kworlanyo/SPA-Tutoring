import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

//? Always import useContext and the Context you created anytime you want to use data from that context.

function Form() {
  const { state, dispatch } = useContext(DataContext);
  const navigate = useNavigate(); // initialize useNavigate to use it

  function handleChange(e) {
    // We are sending the change values through the dispatch function to the reducer function
    dispatch({ type: "CHANGE", payload: { [e.target.name]: e.target.value } });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Create data that you want to send to the reducer function
    const data = {
      title: state.inputs.title,
      notes: state.inputs.notes,
      id: uuidv4(), // first install uuid (npm i uuid), then import it (import { useNavigate } from "react-router-dom";) before using it here.
    };

    // send the data using the dispatch function
    dispatch({ type: "SUBMIT", payload: data });

    navigate("/"); // It means when we submit the form we should go back to the display.jsx page

    // e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          name="title"
          placeholder="Write note title here"
          // We are controlling the input the react way with this code.
          value={state.inputs.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Notes
        <textarea
          name="notes"
          cols="30"
          rows="10"
          // We are controlling the input the react way with this code.
          value={state.inputs.notes}
          placeholder="Write your motes here..."
          onChange={handleChange}
        />
      </label>
      <button>Send</button>
    </form>
  );
}

export default Form;
