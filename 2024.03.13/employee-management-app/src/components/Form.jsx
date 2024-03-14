//* Continuation of Context API usage. See App.jsx for where points are coming from
// 6. Import useContext from react
// 7. Import the context you want to use. In this case we need EmployeesContext and InputsContext
// 8. Destructure the items that you need from the context. Remember that context is holding the values in an an object so you have use Object destructuring {} and not array destructuring [].
// 9. Use the items destructured as you desire.

//* Concept useNavigate
// 1. import useNavigate from react-router-dom
// 2. Create a variable and assign the useNavigate function to it.
// 3. Use that variable and specify the route that it should direct to. Remember to call the variable inside another function

import { useNavigate } from "react-router-dom";
import { EmployeesContext } from "../contexts/EmployeesContext";
import { InputsContext } from "../contexts/InputsContext";
import { useContext } from "react";

function Form() {
  const navigate = useNavigate();
  const { employeesArray, setEmployeesArray } = useContext(EmployeesContext);
  const { inputs, setInputs } = useContext(InputsContext);

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // This means that if any of the conditions is true, the handleSubmit function should return nothing
    // This also means the code below the if statement will not run until the conditions are false, in that case the return will not run and the code below the if statement will be executed.
    if (inputs.name === "" || inputs.phoneNumber === "" || inputs.email === "" || inputs.hiringDate === "") {
      alert("All inputs must be filled  before submission");
      return;
    }

    // When the form is submitted, we set the employees array with the inputs object that is created from the form.
    setEmployeesArray([...employeesArray, inputs]);

    // We then navigate to the employees array through its route.
    navigate("/employees");

    // We reset the input values of the form.
    setInputs({
      name: "",
      phoneNumber: "",
      email: "",
      hiringDate: "",
      id: Date.now(),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" id="" value={inputs.name} onChange={handleChange} />
      </label>
      <label>
        Phone Number
        <input type="number" name="phoneNumber" id="" value={inputs.phoneNumber} onChange={handleChange} />
      </label>
      <label>
        Email Address
        <input type="email" name="email" id="" value={inputs.email} onChange={handleChange} />
      </label>
      <label>
        Hiring Date
        <input type="date" name="hiringDate" id="" value={inputs.hiringDate} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default Form;
