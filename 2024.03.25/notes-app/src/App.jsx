import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Form from "./components/Form";
import Display from "./components/Display";

//* Routing Concept
// 1. Install react-router-dom
// 2. Go to main.jsx and import BrowserRouter
// 3. Wrap the BrowserRouter around the App.jsx component inside the main.jsx
// 4. Come to App.jsx and import Routes and Route
// 6. Create your routes.
// NB: Check layout.jsx to see how to create links to connect to the routes.

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Display />} />
          <Route path="/form" element={<Form />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
