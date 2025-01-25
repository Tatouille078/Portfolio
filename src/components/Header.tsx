import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {

  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isContactPage = location.pathname === "/contact";
  const isProjectPage = location.pathname.startsWith("/project/");
  const [isTextEvent, setTextEvent] = useState(false);

  useEffect(() => {
          const timeout = setTimeout(() => {
              setTextEvent(true);
          }, 1300);
  
          return () => clearTimeout(timeout);
      }, []);

  return (
    <header className={`flex justify-center items-center min-h-[7vh] text-xl transition-all gap-8 border-b-2 w-[50vw] ${isHomePage ? "fade-header" : ""} ${isTextEvent || isContactPage || isProjectPage ? "pointer-events-auto" : "pointer-events-none"}`}>
      <Link to="/">
        <div className="relative group flex flex-col w-24 items-center">
          <p className={`z-10 transition-opacity ${ isHomePage && isTextEvent ? "text-[#ffd59e] underline transition-colors duration-1000" : "" } ${ isTextEvent || isContactPage || isProjectPage ? "mix-blend-difference opacity-100" : "opacity-0" }`}>About</p>
          <span className="absolute h-7 headerHover1 transition-all w-0 group-hover:w-full group-hover:-translate-x-6 duration-[350ms]"></span>
          <span className="absolute h-7 headerHover2 transition-all w-0 group-hover:w-full duration-[250ms]"></span>
          <span className="absolute h-7 headerHover3 transition-all w-0 group-hover:w-full group-hover:translate-x-6"></span>
        </div>
      </Link>
      <Link to="/contact">
        <div className="relative group flex flex-col w-24 items-center">
          <p className={`z-10 transition-opacity ${ isContactPage ? "text-[#ffd59e] underline" : "" } ${ isTextEvent || isContactPage || isProjectPage ? "mix-blend-difference opacity-100" : "opacity-0" }`}>Contact</p>
          <span className="absolute h-7 headerHover1 transition-all w-0 group-hover:w-full group-hover:-translate-x-6 duration-[350ms]"></span>
          <span className="absolute h-7 headerHover2 transition-all w-0 group-hover:w-full duration-[250ms]"></span>
          <span className="absolute h-7 headerHover3 transition-all w-0 group-hover:w-full group-hover:translate-x-6"></span>
        </div>
      </Link>
      <Link to="/project/SkyFlippy">
        <div className="relative group flex flex-col w-24 items-center">
          <p className={`z-10 transition-opacity ${ isProjectPage ? "text-[#ffd59e] underline" : "" } ${ isTextEvent || isProjectPage || isContactPage ? "mix-blend-difference opacity-100" : "opacity-0" }`}>Projects</p>
          <span className="absolute h-7 headerHover1 transition-all w-0 group-hover:w-full group-hover:-translate-x-6 duration-[350ms]"></span>
          <span className="absolute h-7 headerHover2 transition-all w-0 group-hover:w-full duration-[250ms]"></span>
          <span className="absolute h-7 headerHover3 transition-all w-0 group-hover:w-full group-hover:translate-x-6"></span>
        </div>
      </Link>
    </header>
  );
};

export default Header;