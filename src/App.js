import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainNavbar from "./Components/MainNavbar";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import TestPage from "./Pages/TestPage";

function App() {
  return (
    <div>
      <MainNavbar />
      <div className="Universal-Config">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/testpage' element={<TestPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
