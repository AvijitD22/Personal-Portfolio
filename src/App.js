import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Screens/Home";
import PageNotFound from "./Screens/PageNotFound";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
