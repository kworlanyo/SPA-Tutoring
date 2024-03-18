import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onClick, loggedInUserId, formError, handleLoginChange, loginDetails }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUserId) {
      navigate(`/users/${loggedInUserId}`);
    }
  }, [loggedInUserId]);

  return (
    <>
      <h1>Login</h1>

      <form id="login">
        <label>Username</label>
        <input id="username" name="username" value={loginDetails.username} onChange={handleLoginChange} />

        <label>Password</label>
        <input id="password" name="password" value={loginDetails.password} onChange={handleLoginChange} />

        {formError && <p className="error">Incorrect username or password</p>}

        <button onClick={onClick}>Submit</button>
      </form>
    </>
  );
}

export default Login;
