//* Please check form.jsx for an example of how contexts are used.
//* Please check form.jsx for an example of how useNavigate is used.

import Employee from "../components/Employee";
import { useContext } from "react";
import { EmployeesContext } from "../contexts/EmployeesContext";
import { useNavigate } from "react-router-dom";

function Employees() {
  const navigate = useNavigate();
  const { employeesArray } = useContext(EmployeesContext);

  return (
    <>
      <div className="employees-div">
        {employeesArray.length <= 0 && <h2>No data available</h2>} {/* Conditional rendering */}
        {/* Props are sent to the Employee.jsx component for rendering */}
        {employeesArray.map((employee) => (
          <Employee key={employee.id} employee={employee} />
        ))}
        {/* Conditional rendering */}
        {employeesArray.length > 0 && <h2>Number of employees: {employeesArray.length}</h2>}
      </div>

      <button className="new-button" onClick={() => navigate("/form")}>
        Add Employee
      </button>
    </>
  );
}

export default Employees;
