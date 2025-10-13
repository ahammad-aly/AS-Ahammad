import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import DropdownMenu from "./Navitem";
import { DiGithubBadge } from "react-icons/di";
import useTheme from "../../context/them";
import { Typed } from "react-typed";
import { navbarGsap } from "../../gsap/gsapAnimation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const gsaps = "nav";
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

  navbarGsap({ navbarGsaps: gsaps });

  return (
    <nav
      id={gsaps}
      className="w-full z-5 fixed backdrop-blur-sm p-2 dark:bg-gray-800 max-md:w-full lg:w-full"
    >
      <div className="nav-body bg-gradient mx-auto grid grid-cols-3 py-4 shadow-black shadow-2xs max-md:py-2 max-md:grid-cols-2">
        <div className="flex flex-col items-center mt-2.5 h-[30px] overflow-hidden font-bold max-md:h-6 max-md:text-5">
          <h2 className="title text-2xl text-[#c98aee] font-bold max-md:text-xl"></h2>
          <h2 className="h2 text-[#2fce29] leading-none max-md:text-sm h-9 max-md:mt-2">
            Check out <br /> my profile
          </h2>
        </div>
        {/* Navigation Links (Hidden on screens < 670px) */}
        <Nav />

        {/* Navigation Links (Hidden on screens < 670px) */}
        <div className="flex items-center justify-center gap-14 max-md:hidden text-white">
          <Link to="https://github.com/ahammad-aly">
            <DiGithubBadge className="text-3xl font-bold text-[#063011] text-color" />
          </Link>

          <div
            onClick={activeTheme}
            className="cursor-pointer text-gray-800 text-color"
          >
            {darkMode ? "🌞" : "🌙"}
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        <div className="md:hidden flex gap-4 justify-end text-red-800">
          <div
            onClick={activeTheme}
            className="cursor-pointer mr-6 flex items-center"
          >
            {darkMode ? "🌞" : "🌙"}
          </div>
          <div className="flex items-center justify-center">
            <DropdownMenu />
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
            <Link
              to="/"
              className="block text-gray-800 text-color hover:text-blue-500 mb-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-800 text-color hover:text-blue-500 mb-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-800 text-color hover:text-blue-500"
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
