import React from "react";

// Define the component with React.FC
const Header: React.FC = () => {
  return (
    <header className="flex justify-center items-center gap-16 w-[100vh] min-h-20 border-b-2 text-xl">
      <p className="">About</p>
      <p className="">Contact</p>
      <p className="">Projects</p>
    </header>
  );
};

export default Header;