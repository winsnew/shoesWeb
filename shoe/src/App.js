import React from "react";
import "./index.css"
import Home from "./components/Home/Home"
import { Routes, Route } from "react-router-dom"
import Content from "./components/Contents/Content"
import About from "./components/About/About"



function App() {
  return (
    <div className="app__container">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Content/>} />
          <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
