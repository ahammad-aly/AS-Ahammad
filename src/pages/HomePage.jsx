import { homeGsap } from "../gsap/gsapAnimation";
import Home from "../components/home/Home";
import useTheme from "../context/them";

function HomePage() {
  const gsaps = "home";
  const { reset } = useTheme();

  reset();
  homeGsap({ homeRef: gsaps });

  return (
    <div id={gsaps} className="bg-gradient text-color min-h-screen flex-col">
      <Home />
    </div>
  );
}

export default HomePage;
