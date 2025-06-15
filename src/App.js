import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <About />
                <Projects />
                <Skills />
                {/* <Footer /> */}
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
