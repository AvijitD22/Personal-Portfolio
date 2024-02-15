import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Projects from "./Screens/Projects";
import Blogs from "./Screens/Blogs";
import Contact from "./Screens/Contact";
import PageNotFound from "./Screens/PageNotFound";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/blogs"} element={<Blogs />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
