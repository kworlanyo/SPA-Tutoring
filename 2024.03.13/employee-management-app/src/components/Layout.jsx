import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layout() {
  return (
    <div className="layout">
      <Navigation />
      {/* Outlet is like a placeholder. It will render any components whose route is clicked in the Navigation.jsx component */}
      <Outlet />
    </div>
  );
}

export default Layout;
