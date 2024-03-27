import { useEffect, useState } from "react";

function App() {
  // Create state variables to store data
  const [getTodoInput, setGetTodoInput] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [titleInput, setTitleInput] = useState("");

  // Create a function to fetch data from the api
  function fetchData() {
    // Create an async function to get the data. Async functions must be inside a normal function for it to work effectively.
    async function todo() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${getTodoInput}`
        );
        if (response.ok) {
          const data = await response.json();

          // Condition to make sure that we don't store a todo object with the same id twice.
          if (todos.find((todoObj) => todoObj.id === data.id)) {
            alert("Todo added already");
          } else {
            setTodos([...todos, data]);
            setGetTodoInput("");
          }
        } else {
          throw new Error("todo not found");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    todo(); // remember to call the function after creating it
  }

  function handleSubmit(e) {
    e.preventDefault();

    // create a todo object
    const todoObj = {
      title: titleInput,
      id: Date.now(),
      completed: false,
    };

    // sending todo object to todos list
    setTodos([...todos, todoObj]);

    // Sending todo object to the server
    // first create an object to specify that you are posting data that is also JSON data
    // b h m => body, headers, method
    const options = {
      body: JSON.stringify(todoObj),
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
    };

    // Create an async function to send the data to the server. Remember we are inside a normal function so we can go ahead to create the async function.
    async function sendTodo() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
          options
        );
        if (response.ok) {
          const sentData = await response.json();
          console.log(sentData);
        } else {
          throw new Error("Data could not be sent");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    sendTodo(); // remember to call the function after creating it

    // Reset the input back to initial state.
    setTitleInput("");
  }

  // Sending all todos in todos array to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="get-todo-container">
        <input
          type="number"
          name="get-todo"
          value={getTodoInput}
          onChange={(e) => setGetTodoInput(e.target.value)}
          placeholder="Write todo id number here"
        />
        <button onClick={fetchData}>Get Data</button>
      </div>

      <div className="send-todo-container">
        <input
          type="text"
          name="title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          placeholder="Write todo title here"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div className="all-todos-container">
        {todos.map((todo) => {
          return (
            <div className="todo-container" key={todo.id}>
              <h2>{todo.title}</h2>
              {/* React does not render booleans so you can convert them to strings or you can render something else based on the boolean value. */}
              <p>{todo.completed ? "completed" : "not completed"}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
