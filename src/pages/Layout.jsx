import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Nav } from "../components";

const Layout = () => {
  return (
    <div>
      <Nav />
      <div className="mt-4 min-h-[100vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
