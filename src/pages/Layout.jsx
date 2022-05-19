import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../components";

const Layout = () => {
  return (
    <div>
      <Nav />
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
