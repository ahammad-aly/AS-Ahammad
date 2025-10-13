import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiList } from "react-icons/fi";
import { GoX } from "react-icons/go";
import { toggleDropdown } from "../../gsap/gsapAnimation";

const DropdownMenu = () => {
  const gsaps = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    toggleDropdown({ ref: gsaps.current, isOpen: isOpen });
  }, [isOpen]);

  const handleMouseLeave = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" onClick={handleMouseLeave}>
      {/* Three-dot icon */}
      {!isOpen ? (
        <button>
          <FiList className="text-color" />
        </button>
      ) : (
        <button>
          <GoX />
        </button>
      )}
      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={gsaps}
          className="menu bg-gradient fixed w-screen right-0 mt-2 rounded-2xl shadow-lg"
        >
          <ul className="py-2">
            <li className="w-full text-center">
              <Link
                to="/"
                className="block px-4 py-2 text-color hover:bg-[#3d9b74] hover:underline"
              >
                Home
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                to="/skills"
                className="block px-4 py-2 text-color hover:bg-[#3d9b74] hover:underline"
              >
                Skills
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                to="/about"
                className="block px-4 py-2 text-color hover:bg-[#3d9b74] hover:underline"
              >
                About
              </Link>
            </li>
            <li className="w-full text-center ">
              <Link
                to="/contact"
                className="block px-4 py-2 text-color hover:bg-[#3d9b74] hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
