import { NavLink, Outlet } from "react-router-dom"; // import NavLink and Outlet Components from react-router-dom package

function MainPage() {
  return (
    <div className="main-page">
      <h1>
        <NavLink to="/">Hillsong United</NavLink> {/* They are the same as anchor tags in html ie <a href=""></a> */}
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="vocals">Vocals</NavLink>
          </li>
          <li>
            <NavLink to="guitar">Guitar</NavLink>
          </li>
          <li>
            <NavLink to="bass">Bass</NavLink>
          </li>
          <li>
            <NavLink to="drums">Drums</NavLink>
          </li>
        </ul>
      </nav>
      <div className="band-display">
        <Outlet />
      </div>
    </div>
  );
}

export default MainPage;
