import React from "react";
import "./index.css";
import Home from "./routes/Home"
import Blogs from "./routes/Blogs"
import Projects from "./routes/Projects"
import Resources from "./routes/Resources"

import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="container">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/blogs" element={<Blogs/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/resources" element={<Resources/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
