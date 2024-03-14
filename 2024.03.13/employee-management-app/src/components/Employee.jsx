/* eslint-disable react/prop-types */
//* Please check form.jsx for an example of how contexts are used.
//* Please check form.jsx for an example of how useNavigate is used.

//* Concept Dynamic Routing (useParams)
// 1. Define the Route with a placeholder using : after the main route eg. employees/:id (See App.jsx for how it is done)
// 2. Create a Link and add the route that the link should go.
// 3. Go to the component where the link should go to and use the useParams hook there. (See EmployeeDetails.jsx)
// 4. See EmployeeDetails.jsx for the next step.

import { Link, useNavigate } from "react-router-dom";
import { EmployeesContext } from "../contexts/EmployeesContext";
import { InputsContext } from "../contexts/InputsContext";
import { useContext } from "react";

function Employee({ employee }) {
  const { employeesArray, setEmployeesArray } = useContext(EmployeesContext);
  const { setInputs } = useContext(InputsContext);
  const navigate = useNavigate();

  function handleUpdate(id) {
    // To update an input object, you can filter it out from the array and then find the input object.
    // It is done this way so that we don't have a repitition of the same object after we have edited it.
    setEmployeesArray(employeesArray.filter((employee) => employee.id !== id));
    const employeeToUpdate = employeesArray.find((employee) => employee.id === id);

    // Then set the form with values od the input object that was found so that we can edit it.
    setInputs({
      name: employeeToUpdate.name,
      phoneNumber: employeeToUpdate.phoneNumber,
      email: employeeToUpdate.email,
      hiringDate: employeeToUpdate.hiringDate,
      id: employeeToUpdate.id,
    });

    // We navigate to the form using its route to edit the input object.
    navigate("/form");
  }

  // We use the filter method to delete the item from the employeesArray.
  // confirm() is a windows method just like alert(). We ask the user to confirm if they want to delete the item.
  function handleDelete(id) {
    if (confirm("Are you sure you want to delete this employee?")) {
      setEmployeesArray(employeesArray.filter((employee) => employee.id !== id));
    }
  }

  return (
    <div className="employee">
      <h2>{employee.name}</h2>
      <div className="buttons">
        <Link to={`/employees/${employee.id}`}>View Details</Link>
        {/* Assign handleUpdate function to button */}
        <button className="edit-button" onClick={() => handleUpdate(employee.id)}>
          Edit
        </button>
        {/* Assign handleDelete function to button */}
        <button className="delete-button" onClick={() => handleDelete(employee.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Employee;
