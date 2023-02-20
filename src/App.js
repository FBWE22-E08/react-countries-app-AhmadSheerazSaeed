import "./App.css";
import AllCountries from "./components/views/AllCountries";
import ByRegion from "./components/views/ByRegion";
import ByName from "./components/views/ByName";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, route, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* show the Header component, then add the routes to the pages components*/}
        <Routes>
          <Route path="/allCountries" element={<AllCountries />} />
          <Route path="/byregion" element={<ByRegion />} />
          <Route path="/byname" element={<ByName />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
