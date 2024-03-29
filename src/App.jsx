import { Routes, Route } from "react-router";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import Skill from "./components/Skill/Skill";
import Layout from "./components/Layout";
import Grasshopper from "./components/Grasshopper";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/grasshopper" element={<Grasshopper />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
