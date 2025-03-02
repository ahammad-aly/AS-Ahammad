import { Link } from "react-router-dom";
import useTheme from "../context/them";

const Nav = () => {
  const { FlipLink } = useTheme();
  return (
    <nav className="hidden md:flex space-x-4 p-4 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4 flex">
          <Link
            to="/"
            className="text-gray-800 dark:text-white active:text-[#63b929] hover:text-bold"
          >
            <FlipLink>Home</FlipLink>
          </Link>{" "}
          <Link
            to="/skills"
            className="text-gray-800 dark:text-white active:text-[#63b929]"
          >
            <FlipLink>Skills</FlipLink>
          </Link>
          <Link
            to="/about"
            className="text-gray-800 dark:text-white active:text-[#63b929]"
          >
            <FlipLink>About</FlipLink>
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 dark:text-white active:text-[#63b929]"
          >
            <FlipLink>Contact</FlipLink>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
