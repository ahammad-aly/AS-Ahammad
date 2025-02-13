import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import DropdownMenu from "./Navitem";
import { AiOutlineYoutube } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
import useTheme from "../context/them";
import { Typed } from "react-typed";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { themeMode, darkTheme, lightTheme } = useTheme();
  useEffect(() => {
    const typed = new Typed(".title", {
      strings: ["<i>SA Ahammad</i>"],
      typeSpeed: 140,
      cursorChar: "",
    });

    return () => {
      typed.destroy();
    };
  }, []);
  function activeTheme() {
    setDarkMode(!darkMode);
    if (themeMode === "light") {
      darkTheme();
    } else if (themeMode === "dark") {
      lightTheme();
    }
  }

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-100 fixed backdrop-blur-sm bg-transparent w-full transition-opacity p-1 max-md:w-screen dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="title flex items-center text-xl font-bold text-gray-800 dark:text-white"
        ></Link>

        {/* Navigation Links (Hidden on screens < 670px) */}
        <Nav />

        <div className="max-md:hidden w-90 flex justify-evenly text-white">
          <div className="w-50 flex justify-evenly text-white">
            <Link to="https://github.com/ahammad-aly">
              <DiGithubBadge className="text-3xl font-bold text-[#063011] dark:text-white" />
            </Link>
            <Link to="https://www.youtube.com/@ERROR-CODE333">
              <AiOutlineYoutube className="text-3xl font-bold text-[#063011] dark:text-white" />
            </Link>
          </div>
          <button
            onClick={activeTheme}
            className="mr-6 text-gray-800 dark:text-white"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>

        <div className="md:hidden flex w-30 text-red-800">
          <button
            onClick={activeTheme}
            className="mr-6 text-gray-800 dark:text-white"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
          <DropdownMenu />
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
            <Link
              to="/"
              className="block text-gray-800 dark:text-white hover:text-blue-500 mb-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-800 dark:text-white hover:text-blue-500 mb-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-800 dark:text-white hover:text-blue-500"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
