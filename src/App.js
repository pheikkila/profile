import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainNavbar from "./Components/MainNavbar";
import Home from "./Pages/Home/Home";
import WebProjects from "./Pages/Projects/WebProjects/WebProjects";
import TestPage from "./Pages/TestPage";

function App() {
  return (
    <div>
      <MainNavbar />
      <div className="Universal-Config">
        <Routes>
          <Route path='/' element={<Home />} />
          {/* TODO webprojects, add props and map to webprojectinstances */}
          <Route path='/webprojects' element={<WebProjects />} />
          <Route path='/testpage' element={<TestPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
