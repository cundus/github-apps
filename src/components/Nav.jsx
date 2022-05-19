import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex shadow-md items-center justify-between p-5">
      <Link to="/" className="w-fit text-md md:text-xl font-bold">
        GithubApps
      </Link>

      <div className="w-28"></div>
    </nav>
  );
};

export default Nav;
