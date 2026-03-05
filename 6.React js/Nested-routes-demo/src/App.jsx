import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      {/* global nav */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
      <Route path="/" element={<Home/>}/>
        {/* parent Routes */}
        <Route path="dashboard" element={<Dashboard />}>
          {/* nested child routes */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
