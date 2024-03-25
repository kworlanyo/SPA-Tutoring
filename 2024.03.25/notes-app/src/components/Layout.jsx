import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/form">Form</NavLink>
          </li>
        </ul>
      </nav>
      {/* //* The <Outlet /> component is very important because without it you will noy see the content inside the components with the route. So remember to always include it in the Layout.jsx component. */}
      <Outlet />
    </div>
  );
}

export default Layout;
