/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";

// Concept Context
// 1. Create context using createContext
// 2. Create context provider function and put the context provider inside (see DataContextProvider function here)
// 3. Go to main.jsx and wrap the context provider function around the app.jsx (See main.jsx for reference)
// 4. Inside the context provider function, add a prop called value and send all the data as one object there (see DataContextProvider function here)

export const DataContext = createContext();

// initial State
const initialState = {
  quote: {},
  isLoading: true,
  inputs: {
    title: "",
    notes: "",
  },
  // Checking to see if there is data in the localStorage. If there is data, it should be loaded in the display array. If not, then the display array should be empty. This time, JSON comes first before localStorage
  display: JSON.parse(localStorage.getItem("notes")) || [],
};

/* 
const currentState = {
  ....all properties
}
*/

// reducer function
// type and "payload" are properties of action object
// Remember to always copy the currentState before using it or else React will not know that there has been a change in state.
function reducer(currentState, action) {
  switch (action.type) {
    case "SET-QUOTE": {
      return {
        ...currentState,
        quote: { ...currentState.quote, ...action.payload },
      };
    }

    case "IS-LOADING": {
      return {
        ...currentState,
        isLoading: false,
      };
    }

    case "CHANGE": {
      return {
        ...currentState,
        inputs: { ...currentState.inputs, ...action.payload },
      };
    }

    case "SUBMIT": {
      return {
        ...currentState,
        display: [...currentState.display, action.payload],
        inputs: {
          title: "",
          notes: "",
        },
      };
    }

    case "DELETE-ALL": {
      return {
        ...currentState,
        display: [],
      };
    }

    case "DELETE": {
      return {
        ...currentState,
        display: currentState.display.filter(
          (note) => note.id !== action.payload
        ),
        //  filter returns a new array that is why we are not copying the array first before giving new data
      };
    }
  }
}

function DataContextProvider({ children }) {
  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetching data
  useEffect(() => {
    async function getQuotes() {
      try {
        const response = await fetch(
          "https://inspo-quotes-api.herokuapp.com/quotes/random"
        );
        if (response.ok) {
          const data = await response.json();
          dispatch({ type: "SET-QUOTE", payload: data.quote });
          dispatch({ type: "IS-LOADING" });
        } else {
          throw new Error("No quote available");
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    getQuotes();

    // This is just to make sure that the data is fetched again after every 60 seconds. 1000 is 1second so 60000 is 60seconds
    const Interval = setInterval(getQuotes, 60000);

    // Remember to clear the interval to prevent abnormal behavior of the setInterval
    return () => {
      clearInterval(Interval);
    };
  }, []);

  // We use useEffect to send the data to the localStorage. So the dependency array will be the display property of the state object. This means that anytime there is a change in the display property, useEffect will run and the data will be sent to local storage.
  useEffect(() => {
    // sending data to localStorage. localStorage comes first before JSON.stringify
    localStorage.setItem("notes", JSON.stringify(state.display));
  }, [state.display]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
