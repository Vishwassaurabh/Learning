import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Postlayout from "./components/Postlayout";
import PostDetails from "./components/PostDetails";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Nested post route */}
          <Route path="posts" element={<Postlayout />}>
          <Route path=":postId" element={<PostDetails />} />
        </Route>
          {/* not found */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
