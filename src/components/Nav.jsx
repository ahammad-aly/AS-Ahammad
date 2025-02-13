import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="hidden md:flex space-x-4 p-4 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link
            to="/"
            className="text-gray-800 dark:text-white hover:text-blue-500 hover:text-bold"
          >
            Home
          </Link>{" "}
          <Link
            to="/skills"
            className="text-gray-800 dark:text-white hover:text-blue-500"
          >
            Skills
          </Link>
          <Link
            to="/about"
            className="text-gray-800 dark:text-white hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 dark:text-white hover:text-blue-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
