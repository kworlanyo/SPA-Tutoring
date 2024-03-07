// Import all components needed inside the <App/> Component
import Bass from "./components/Bass";
import Drums from "./components/Drums";
import Guitar from "./components/Guitar";
import MainPage from "./components/MainPage";
import Vocals from "./components/Vocals";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom"; // import Routes and Route from react-router-dom
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      {/* Routes serves a container to contain all individual routes */}
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Home />} />
          <Route path="vocals" element={<Vocals />} />
          <Route path="guitar" element={<Guitar />} />
          <Route path="bass" element={<Bass />} />
          <Route path="drums" element={<Drums />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
