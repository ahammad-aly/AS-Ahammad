import { Link } from "react-router-dom";
import useTheme from "../../context/them";

const Nav = () => {
  const { FlipLink } = useTheme();
  return (
    <nav className="max-md:hidden md:flex space-x-4">
      <div className="mx-auto flex justify-between items-center">
        <div className="space-x-4 flex ">
          <Link to="/" className="text-color ">
            <FlipLink className="h-4.5">Home</FlipLink>
          </Link>{" "}
          <Link to="/skills" className="text-color">
            <FlipLink className="h-4.5">Skills</FlipLink>
          </Link>
          <Link to="/about" className="text-color">
            <FlipLink className="h-4.5">About</FlipLink>
          </Link>
          <Link to="/contact" className="text-color">
            <FlipLink className="h-4.5">Contact</FlipLink>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
