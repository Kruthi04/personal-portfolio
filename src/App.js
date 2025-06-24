import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import ScrollSpy from "./components/ScrollSpy";
import ProjectDetails from "./components/ProjectDetails";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <ScrollSpy sectionIds={["home", "about", "projects", "skills"]} />

        {/* <div className="container"> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <About />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
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
