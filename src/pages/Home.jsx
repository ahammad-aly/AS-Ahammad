import { useRef } from "react";
import "../index.css";
import useTheme from "../context/them";
import { gsap } from "gsap";
import video from "../assets/webvideo.mp4";
import image from "../assets/webPic.jpg";
import { useGSAP } from "@gsap/react";
import svgs from "../assets/landing.svg";
import ContactHome from "../home/ContactHome";
import AboutSkills from "../home/AboutSkills";
import ParagraphHome from "../home/ParagraphHome";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const { FlipLink } = useTheme();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".p", {
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.4,
    }).from(".svg", {
      y: 50,
      opacity: 0,
      duration: 0.7,
      delay: 0.2,
      stagger: 0.2,
    });
    gsap.from(".video", {
      opacity: 0,
      y: 150,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".video",
        scroller: "body",
        start: "top 90%",
      },
    });
  });

  function enter() {
    gsap.to(".play", {
      scale: 1,
      opacity: 1,
    });
  }
  function leave() {
    gsap.to(".play", {
      scale: 0,
      opacity: 0,
    });
  }
  function move(dets) {
    gsap.to(".play", {
      left: dets.clientX - 20,
      top: dets.clientY + 20,
    });
    // console.log(dets);
  }

  return (
    <section className="min-h-screen bg-linear-to-r/srgb from-indigo-500 to-teal-400 dark:bg-radial-[at_25%_25%] dark:from-gray-500 dark:to-zinc-900 flex-col">
      <div className="flex justify-center items-center py-28 max-md:flex-col max-md:pt-20">
        <img src={svgs} className="svg w-1/2 max-md:hidden" />
        <div className="flex flex-col px-20 max-md:px-5">
          <img
            src={image}
            className="svg h-160 mb-4 rounded-full max-md:h-auto max-xl:h-auto"
          />
          <div ref={heroRef} className="text-center">
            <h1 className="text-7xl max-md:text-2xl cursor-pointer ">
              <FlipLink>WELLCOME</FlipLink>
            </h1>
            <h3 className="p cursor-pointer mt-4 text-5xl text-gray-600 dark:text-gray-300 max-md:text-xl">
              {"I build modern, "}
              <FlipLink className="lowercase py-1.5">responsive</FlipLink>
              {" web applications."}
            </h3>
          </div>
        </div>
      </div>
      <hr className="dark:text-green-400" />
      <AboutSkills />
      <div
        onMouseEnter={enter}
        onMouseLeave={leave}
        onMouseMove={move}
        className="my-12 mx-auto relative w-[90%]"
      >
        <h2 className="play cursor-pointer z-50 p-3 py-4 text-red-300 bg-amber-950 fixed rounded-full opacity-0 scale-0">
          PLAY
        </h2>

        <video
          autoPlay={true}
          muted={true}
          loop={true}
          className="video mx-auto w-full"
        >
          <source src={video} />
        </video>
      </div>

      <hr className="dark:text-green-400 mt-29" />
      <ParagraphHome FlipLink={FlipLink} />
      <hr className="dark:text-green-400" />
      <ContactHome />
    </section>
  );
};

export default Home;
