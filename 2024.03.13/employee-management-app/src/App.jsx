import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Employees from "./views/Employees";
import EmployeeDetails from "./components/EmployeeDetails";
import Form from "./components/Form";
import EmployeesContextProvider from "./contexts/EmployeesContext";
import InputsContextProvider from "./contexts/InputsContext";

//* Concept react-router-dom
// 1. Install react-router-dom
// 2. Import BrowserRouter from react-router-dom (See main.jsx)
// 3. Wrap App component with BrowserRouter component (See main.jsx)
// 4. Create Routes inside the App component as seen below.
// 5. Create navLinks that will be directed to the routes when they are clicked. (See Navigation.jsx)

// *Continuation of Concept Context API (See EmployeeContext.jsx and InputsContext.jsx for starting points)
// 4. Wrap the Routes components with Context Providers as seen below
// 5. Go into a component that needs the context and do the following (See Form.jsx for an example on using a context)

function App() {
  return (
    <EmployeesContextProvider>
      <InputsContextProvider>
        <Routes>
          {/* Wrap the routes inside the Layout Component */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* The home component will be the first component seen on the app */}
            <Route path="/form" element={<Form />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="employees/:id" element={<EmployeeDetails />} />
          </Route>
        </Routes>
      </InputsContextProvider>
    </EmployeesContextProvider>
  );
}

export default App;
