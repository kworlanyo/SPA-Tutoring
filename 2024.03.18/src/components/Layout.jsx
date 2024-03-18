import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layout({ loggedInUserId }) {
  return (
    <div className="app">
      <header>
        <Navigation loggedInUserId={loggedInUserId} />
      </header>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;