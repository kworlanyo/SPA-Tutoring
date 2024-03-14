//* Please check form.jsx for an example of how contexts are used.
//* Please check form.jsx for an example of how useNavigate is used.

//* Continuation of Concept Dynamic Routing (See Employee.jsx for previous points)
// 5. import useParams for react-router-dom
// 6. The useParam hook stores the parameters in an object. The parameter is what is written after the main route eg. employees/:id, id the parameter. It stores the value taken from link that is clicked in Employee.jsx, that from here `/employees/${employee.id}`, it store the value of employee.id inside the id placeholder.
// 7. Destructure the parameter from the useParam hook using object destructuring
// 8. Use the find method to look for item that was clicked inside the employeeArray.

import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { EmployeesContext } from "../contexts/EmployeesContext";

function EmployeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { employeesArray } = useContext(EmployeesContext);

  const findEmployee = employeesArray.find((employee) => employee.id === Number(id)); // In this case, the id had to be converted into a number before it could work.

  // After finding the item or object, you can use it to render the jsx as done below.
  return (
    <div className="employee-details">
      <h2>
        Name: <span>{findEmployee.name}</span>
      </h2>
      <h2>
        Phone Number: <span>{findEmployee.phoneNumber}</span>
      </h2>
      <h2>
        Email Address: <span>{findEmployee.email}</span>
      </h2>
      <h2>
        Hiring Date: <span>{findEmployee.hiringDate}</span>
      </h2>
      <h2>
        Employee ID: <span>{findEmployee.id}</span>
      </h2>
      <button onClick={() => navigate("/employees")}>Go back</button>
    </div>
  );
}

export default EmployeeDetails;
