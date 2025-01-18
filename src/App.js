import React from "react";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BlogPage } from "./components/blogs/blogPage";
import NotFound from "./components/NotFound";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
