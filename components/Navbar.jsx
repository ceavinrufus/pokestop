import React from "react";
import Search from "./Search";
import Link from "next/link";

const Navbar = ({ title, textColor }) => {
  return (
    <div
      className={`h-[100px] md:h-[125px] lg:h-[150px] flex items-center justify-between mx-10 md:mx-16 lg:mx-28 text-${textColor}`}
    >
      <Link href="/">
        <a href="">
          <h1 className="text-xl md:text-3xl lg:text-5xl">{title}</h1>
        </a>
      </Link>
      <div className="flex my-4">
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
