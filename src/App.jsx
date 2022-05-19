import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout, User } from "./pages";
import "./App.css";

const App = () => {
  // configure react-router
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<User />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
