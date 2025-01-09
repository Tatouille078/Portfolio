import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <header className={`flex justify-center items-center min-h-[7vh] text-xl transition-all gap-12 border-b-2 w-[50vw] ${isHomePage ? "fade-header" : ""}`}>
      <Link to="/">
        <div className="relative group flex flex-col w-24 items-center">
          <p className="z-10 mix-blend-difference text-[#ffd59e]">About</p>
          <span className="absolute h-7 headerHover1 transition-all w-0 group-hover:w-full group-hover:-translate-x-6 duration-[250ms]"></span>
          <span className="absolute h-7 headerHover2 transition-all w-0 group-hover:w-full duration-200"></span>
          <span className="absolute h-7 headerHover3 transition-all w-0 group-hover:w-full group-hover:translate-x-6"></span>
        </div>
      </Link>
      <Link to="/contact">
        <div className="relative group flex flex-col w-24 items-center">
          <p>Contact</p>
          <span className="absolute border-b-2 top-[26px] h-0 transition-all w-0 group-hover:w-full"></span>
        </div>
      </Link>
      <Link to="/project/default">
        <div className="relative group flex flex-col w-24 items-center">
          <p>Projects</p>
          <span className="absolute border-b-2 top-[26px] h-0 transition-all w-0 group-hover:w-full"></span>
        </div>
      </Link>
    </header>
  );
};

export default Header;