/* eslint-disable react/prop-types */
//* Concept Context API
// 1. Import createContext from react
import { createContext, useState } from "react";

// 2. Create a context
export const InputsContext = createContext();

// 3. Create a contextProvider
// The children prop represents all the components that will be wrapped with the contextProvider
// The value prop takes all the states and functions that you want to make available to other components and puts them in an object.

// 4. See App.jsx component for next steps
function InputsContextProvider({ children }) {
  const [inputs, setInputs] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    hiringDate: "",
    id: Date.now(),
  });

  return <InputsContext.Provider value={{ inputs, setInputs }}>{children}</InputsContext.Provider>;
}

export default InputsContextProvider;
