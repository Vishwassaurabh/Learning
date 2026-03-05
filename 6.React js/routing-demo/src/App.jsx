import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <BrowserRouter>
      {/* Navigation links here */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About </Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        {/* 404 route must be at the bottom */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
