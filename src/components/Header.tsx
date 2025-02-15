import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {

  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isContactPage = location.pathname === "/contact";
  const isProjectPage = location.pathname.startsWith("/project/");
  const isJourneyPage = location.pathname.startsWith("/journey/");
  const isDocsPage = location.pathname.startsWith("/docs/");
  const [isTextEvent, setTextEvent] = useState(false);
  const [isHoverSchool, setHoverSchool] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextEvent(true);
    }, 1300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <header className={`flex justify-center items-center h-[7vh] text-xl transition-all gap-[3vw] border-b-2 w-[50vw] ${isHomePage ? "fade-header" : ""} ${isTextEvent || isContactPage || isProjectPage ? "pointer-events-auto" : "pointer-events-none"}`}>
      <Link to="/">
        <div className="relative group flex flex-col w-24 items-center">
          <p className={`z-10 transition-opacity ${isHomePage && isTextEvent ? "text-[#ffd59e] underline transition-colors duration-1000" : ""} ${isTextEvent || isContactPage || isProjectPage ? "mix-blend-difference opacity-100" : "opacity-0"}`}>About</p>
          <span className="absolute h-7 headerHover1 transition-all w-0 group-hover:w-full group-hover:-translate-x-6 duration-[350ms]"></span>
          <span className="absolute h-7 headerHover2 transition-all w-0 group-hover:w-full duration-[250ms]"></span>
          <span className="absolute h-7 headerHover3 transition-all w-0 group-hover:w-full group-hover:translate-x-6"></span>
        </div>
      </Link>
      <Link to="/project/SkyFlippy">
        <div className="relative group flex flex-col w-24 items-center">
          <p className={`z-10 transition-opacity ${isProjectPage ? "text-[#ffd59e] underline" : ""} ${isTextEvent || isProjectPage || isContactPage ? "mix-blend-difference opacity-100" : "opacity-0"}`}>Projects</p>
          <span className="absolute h-7 headerHover1 transition-all w-0 group-hover:w-full group-hover:-translate-x-6 duration-[350ms]"></span>
          <span className="absolute h-7 headerHover2 transition-all w-0 group-hover:w-full duration-[250ms]"></span>
          <span className="absolute h-7 headerHover3 transition-all w-0 group-hover:w-full group-hover:translate-x-6"></span>
        </div>
      </Link>
      <div className="relative w-24 z-30" onMouseEnter={() => setHoverSchool(true)} onMouseLeave={() => setHoverSchool(false)} onClick={() => setHoverSchool(true)}>
        <div className="relative group flex flex-col items-center cursor-default">
          <p className={`z-10 transition-opacity ${isDocsPage || isJourneyPage ? "text-[#ffd59e] underline" : ""} ${isTextEvent || isProjectPage || isContactPage ? "mix-blend-difference opacity-100" : "opacity-0"}`}>School</p>
          <span className="absolute h-7 headerHover4 transition-all w-0 group-hover:w-full group-hover:-translate-x-6 duration-[350ms]"></span>
          <span className="absolute h-7 headerHover5 transition-all w-0 group-hover:w-full duration-[250ms]"></span>
          <span className="absolute h-7 headerHover6 transition-all w-0 group-hover:w-full group-hover:translate-x-6"></span>
        </div>
        <div className={`absolute pt-[5vh] top-0 text-center flex flex-col items-center justify-center right-0 left-0 text-zinc-200 ${isHoverSchool ? "" : "pointer-events-none"}`}>
          <div className={`relative group h-14 flex justify-center items-center border-b-2 border-zinc-300 transition-all duration-500 ${isHoverSchool ? "opacity-100 w-[70%]" : "opacity-0 -translate-y-4 w-0"}`}>
              <p className={`z-10 transition-opacity ${isJourneyPage ? "text-[#ffd59e] underline" : ""} ${isTextEvent || isProjectPage || isContactPage ? "mix-blend-difference opacity-100" : "opacity-0"}`}><Link to="/journey"> Journey</Link></p>
              <span className="absolute h-7 headerHover4 transition-all w-0 group-hover:w-[120%] group-hover:-translate-x-6 duration-[350ms] "></span>
              <span className="absolute h-7 headerHover5 transition-all w-0 group-hover:w-[120%] duration-[250ms]"></span>
              <span className="absolute h-7 headerHover6 transition-all w-0 group-hover:w-[120%] group-hover:translate-x-6 "></span>
          </div>
          <div className={`relative group h-14 flex justify-center items-center border-b-2 border-zinc-300 transition-all duration-500 ${isHoverSchool ? "opacity-100 w-[70%]" : "opacity-0 -translate-y-8 w-0"}`}>
            <p className={`z-10 transition-opacity ${isDocsPage ? "text-[#ffd59e] underline" : ""} ${isTextEvent || isProjectPage || isContactPage ? "mix-blend-difference opacity-100" : "opacity-0"}`}>Docs</p>
            <span className="absolute h-7 headerHover4 transition-all w-0 group-hover:w-[100%] group-hover:-translate-x-6 duration-[350ms]"></span>
            <span className="absolute h-7 headerHover5 transition-all w-0 group-hover:w-[100%] duration-[250ms]"></span>
            <span className="absolute h-7 headerHover6 transition-all w-0 group-hover:w-[100%] group-hover:translate-x-6"></span>
          </div>
        </div>
      </div>
      <Link to="/contact">
        <div className="relative group flex flex-col w-24 items-center fit">
          <p className={`z-10 transition-opacity ${isContactPage ? "text-[#ffd59e] underline" : ""} ${isTextEvent || isContactPage || isProjectPage ? "mix-blend-difference opacity-100" : "opacity-0"}`}>Contact</p>
          <span className="absolute h-7 headerHover1 transition-all w-0 group-hover:w-full group-hover:-translate-x-6 duration-[350ms]"></span>
          <span className="absolute h-7 headerHover2 transition-all w-0 group-hover:w-full duration-[250ms]"></span>
          <span className="absolute h-7 headerHover3 transition-all w-0 group-hover:w-full group-hover:translate-x-6"></span>
        </div>
      </Link>
    </header>
  );
};

export default Header;