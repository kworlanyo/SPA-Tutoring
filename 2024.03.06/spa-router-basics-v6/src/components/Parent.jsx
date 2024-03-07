import { NavLink, Outlet } from "react-router-dom";

function Parent() {
  return (
    <>
      <nav>
        <ul>
          <li className="active-link">
            <NavLink className="inner-link" to="/">
              Home
            </NavLink>
            {/* <a href="">Home</a> */}
          </li>
          <li>
            <NavLink className="inner-link" to="/one">
              ChildOne
            </NavLink>
          </li>
          <li>
            <NavLink className="inner-link" to="/two">
              ChildTwo
            </NavLink>
          </li>
          <li>
            <NavLink className="inner-link" to="/three">
              LastChild
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="h1-container">
        <Outlet />
      </div>
    </>
  );
}

export default Parent;
