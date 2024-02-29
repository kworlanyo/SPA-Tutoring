//* React's way of declaring a variable that will change later
const [data, setData] = useState({ title: "", email: "", text: "" });

//* Vanilla JavaScript's way of declaring a variable that will change later
let data2 = {
  title: "",
  email: "",
  text: "",
};

//* Accessing an object's properties
data.title;
data.email;

//* React's way of updating a variable
setData(0);

//* Vanilla Javascript way of updating a variable
data2 = 0;

//* Getting data from a form
// 1. Declare the state variable and assign it a default value.
// 2. Inside the input element you want to control, assign the state variable to the value attribute.
// 3. Give the input element an event listener called onChange and then give it an event handler function.
// 4. Give the form an event listener called onSubmit and give it an event handler function as well. This function will include how you want the data to be processed.
