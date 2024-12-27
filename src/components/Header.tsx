import React, { useEffect, useState } from "react";

const Header: React.FC = () => {

  const [isTextEvent, setTextEvent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextEvent(true);
    }, 1200);

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <header className={`flex justify-center items-center min-h-20 text-xl transition-all duration-1000 ${isTextEvent ? 'w-[100vh] gap-16 border-b-2 text-slate-100' : 'w-0 gap-0 border-b-2 text-zinc-900'}`}>
      <p>About</p>
      <p>Contact</p>
      <p>Projects</p>
    </header>
  );
};

export default Header;