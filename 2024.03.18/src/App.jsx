import { useEffect, useReducer } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Vocals from "./views/Vocals";
import Guitar from "./views/Guitar";
import Bass from "./views/Bass";
import Drums from "./views/Drums";
import Band from "./views/Band";
import Login from "./views/Login";
import User from "./views/User";

// initial state here
const initialState = {
  users: [],
  loggedInUserId: null,
  formError: false,
  loginDetails: {
    username: "",
    password: "",
  },
};

// We use the switch statement to avoid repeating the "action.type" phrase in every if else statement
/* 
if (action.type === ""){}
else if (action.type === "") {}
*/

// reducer function here
function reducer(currentState, action) {
  // action is an object which has "type" and "payload" properties. The type is just like the name of the action
  switch (action.type) {
    case "updateUsers": {
      return { ...currentState, users: action.payload };
    }

    case "loginSubmit": {
      const user = currentState.users.find((user) => {
        return (
          user.username === currentState.loginDetails.username && user.email === currentState.loginDetails.password
        );
      });

      // We need to write loginDetails: { username: "", password: "" } because the currentState of the loginDetails may have been changed by any of the action types.
      if (user) {
        return {
          ...currentState,
          formError: false,
          loggedInUserId: user.id,
          loginDetails: { username: "", password: "" },
        };
      } else {
        return { ...currentState, formError: true, loginDetails: { username: "", password: "" } };
      }
    }

    case "logout": {
      return { ...currentState, loggedInUserId: null };
    }

    case "loginChange": {
      return {
        ...currentState,
        loginDetails: { ...currentState.loginDetails, [action.payload.name]: action.payload.value },
      };
    }
  }

  // throw an error in case there is no action with that type.
  throw new Error("Unknown action: ", action.type);
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  //* state will be equal to the initialState and then the reducer function will be updating it anytime an action type is called by the dispatch function. So it will be like this when the app mounts:
  // const state = {
  //   users: fetchedUsers,
  //   loggedInUserId: null,
  //   formError: false,
  //   loginDetails: {
  //     username: "",
  //     password: "",
  //   },
  // }
  const navigate = useNavigate();

  const loggedInUser = state.users.find((user) => user.id === state.loggedInUserId);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Could not fetch users");
      })
      .then((data) => {
        const fetchedUsers = [];

        data.forEach((user) => {
          fetchedUsers.push({
            id: user.id,
            username: user.username,
            email: user.email,
            name: user.name,
          });
        });

        dispatch({ type: "updateUsers", payload: fetchedUsers }); // dispatch function with an action type is called here.
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  function handleLoginSubmit(e) {
    e.preventDefault();
    dispatch({ type: "loginSubmit" }); // dispatch function with an action type is called here.
  }

  function handleLogout() {
    dispatch({ type: "logout" }); // dispatch function with an action type is called here.
    navigate("/");
  }

  function handleLoginChange({ target }) {
    dispatch({ type: "loginChange", payload: { name: target.name, value: target.value } }); // dispatch function with an action type is called here.
  }

  return (
    <Routes>
      <Route path="/" element={<Layout loggedInUserId={state.loggedInUserId} />}>
        <Route index element={<Band />} />
        <Route path="/vocals" element={<Vocals />} />
        <Route path="/guitar" element={<Guitar />} />
        <Route path="/bass" element={<Bass />} />
        <Route path="/drums" element={<Drums />} />
        <Route
          path="/login"
          element={
            <Login
              onClick={handleLoginSubmit}
              loggedInUserId={state.loggedInUserId}
              formError={state.formError}
              loginDetails={state.loginDetails}
              handleLoginChange={handleLoginChange}
            />
          }
        />
        <Route
          path="/users/:id"
          element={<User loggedInUser={loggedInUser} usersLength={state.users.length} onClick={handleLogout} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
