import React, { useState } from "react";
import { ChevronDownIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between text-black px-8 py-4 md:px-20  shadow-lg">
      <span className="text-4xl md:text-4xl font-semibold tracking-wide">
        Buffer!!
      </span>

      <button
        className="block md:hidden text-xl focus:outline-none"
        onClick={toggleMenu}
      >
        <span className="material-icons">
          {isOpen ? (
            <XIcon className="h-6 w-6 ml-2 mt-2" />
          ) : (
            <MenuIcon className="h-6 w-6 ml-2 mt-2" />
          )}
        </span>
      </button>

      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } w-full md:w-auto md:flex flex-col md:flex-row items-center gap-8 md:gap-28 mt-4 md:mt-0 text-xl font-semibold`}
      >
        <div className="relative group">
          <a href="/tools">
            <li className="text-xl transition-all duration-300 p-1 md:p-0 cursor-pointer flex">
              Tools
              <ChevronDownIcon className="h-4 w-4 ml-2 mt-2" />
            </li>
          </a>
          <ul className="absolute hidden group-hover:block md:hidden bg-white shadow-lg rounded-md mt-0 w-48 z-10">
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="/tool1">Tool 1</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="/tool2">Tool 2</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="/tool3">Tool 3</a>
            </li>
          </ul>
        </div>
        <div className="relative group">
          <a href="/Channels">
            <li className="text-xl transition-all duration-300 p-1 md:p-0 cursor-pointer flex">
              Channels
              <ChevronDownIcon className="h-4 w-4 ml-2 mt-2" />
            </li>
          </a>
          <ul className="absolute hidden group-hover:block md:hidden bg-white shadow-lg rounded-md mt-0 w-48 z-10">
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="/tool1">Tool 1</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="/tool2">Tool 2</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="/tool3">Tool 3</a>
            </li>
          </ul>
        </div>

        <a href="/pricing">
          <li className="text-xl p-1">Pricing</li>
        </a>
        <a href="/blog">
          <li className="text-xl p-1">Blog</li>
        </a>

        <a href="/login">
          <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-600 active:bg-blue-800 active:translate-y-0  transition-all mb-2 mt-2">
            Login
          </button>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
