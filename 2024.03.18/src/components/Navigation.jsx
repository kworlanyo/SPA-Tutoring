import { NavLink } from "react-router-dom";
import logo from "/logo.png";

function Navigation({ loggedInUserId }) {
  return (
    <div className="navigation">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Black Sabbath logo"></img>
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/vocals">
              VOCALS
            </NavLink>
          </li>
          <li>
            <NavLink to="/guitar">
              GUITAR
            </NavLink>
          </li>
          <li>
            <NavLink to="/bass">
              BASS
            </NavLink>
          </li>
          <li>
            <NavLink to="/drums">
              DRUMS
            </NavLink>
          </li>
          <li>
            {
              loggedInUserId 
                ? (
                  <NavLink to={`users/${loggedInUserId}`}>MY PROFILE</NavLink>
                )
                : (
                  <NavLink to="/login">LOGIN</NavLink>
                )
            }
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;