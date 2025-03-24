import { Link } from "react-router-dom";
import useTheme from "../context/them";

const Nav = () => {
  const { FlipLink } = useTheme();
  return (
    <nav className="hidden md:flex space-x-4 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4 flex ">
          <Link
            to="/"
            className="text-gray-800 dark:text-white active:text-[#63b929] hover:text-bold"
          >
            <FlipLink className="h-4.5">Home</FlipLink>
          </Link>{" "}
          <Link
            to="/skills"
            className="text-gray-800 dark:text-white active:text-[#63b929]"
          >
            <FlipLink className="h-4.5">Skills</FlipLink>
          </Link>
          <Link
            to="/about"
            className="text-gray-800 dark:text-white active:text-[#63b929]"
          >
            <FlipLink className="h-4.5">About</FlipLink>
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 dark:text-white active:text-[#63b929]"
          >
            <FlipLink className="h-4.5">Contact</FlipLink>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
