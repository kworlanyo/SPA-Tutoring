import { Route, Routes } from "react-router-dom";
import Parent from "./components/Parent";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import ChildOne from "./components/ChildOne";
import ChildTwo from "./components/ChildTwo";
import LastChild from "./components/LastChild";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Parent />}>
        <Route index element={<Home />} />
        <Route path="/one" element={<ChildOne />} />
        <Route path="/two" element={<ChildTwo />} />
        <Route path="/three" element={<LastChild />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
