import React from "react";

const Navbar = ({ title }) => {
  return (
    <div className={`h-[150px] flex items-center justify-center px-8`}>
      <h1 className="text-5xl text-[#fff]">{title}</h1>
    </div>
  );
};

export default Navbar;