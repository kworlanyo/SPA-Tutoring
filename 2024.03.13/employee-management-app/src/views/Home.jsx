//* Please check form.jsx for an example of how useNavigate is used.
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to the Employee Management App</h1>
      <button onClick={() => navigate("/form")}>Add Employee</button>
    </div>
  );
}

export default Home;
