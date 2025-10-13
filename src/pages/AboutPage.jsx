import About from "../components/about/About";
import { aboutGsap } from "../gsap/gsapAnimation";
import useTheme from "../context/them";

function AboutPage() {
  const gsaps = "about";
  aboutGsap({ aboutGsaps: gsaps });
  const { reset } = useTheme();
  reset();

  return (
    <div id={gsaps} className="bg-gradient min-h-screen p-8">
      <About />
    </div>
  );
}

export default AboutPage;
