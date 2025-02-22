import { useRef } from "react";
import "../index.css";
import { gsap } from "gsap";
import video from "../assets/webvideo.mp4";
import image from "../assets/webPic.jpg";
import { useGSAP } from "@gsap/react";
import svgs from "../assets/landing.svg";
import ContactHome from "../home/ContactHome";
import AboutSkills from "../home/AboutSkills";
import timeline from "gsap/gsap-core";
import ParagraphHome from "../home/ParagraphHome";
gsap.registerPlugin(timeline);

const Home = () => {
  const heroRef = useRef(null);

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
      top: dets.clientY - 40,
    });
    // console.log(dets);
  }

  return (
    <section className="min-h-screen bg-linear-to-r/srgb from-indigo-500 to-teal-400 dark:bg-radial-[at_25%_25%] dark:from-gray-500 dark:to-zinc-900 flex-col w-screen">
      <div className="flex justify-center items-center py-28 max-md:flex-col max-md:pt-20">
        <img src={svgs} className="svg w-1/2 max-md:hidden" />
        <div className="flex flex-col px-20 max-md:px-5">
          <img
            src={image}
            className="svg h-160 mb-4 rounded-full max-md:h-auto max-xl:h-auto"
          />
          <div ref={heroRef} className="text-center">
            <h1 className="p text-4xl font-bold text-gray-800 dark:text-white">
              Welcome
            </h1>
            <p className="p mt-4 text-xl text-gray-600 dark:text-gray-300">
              I build modern, responsive web applications.
            </p>
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
        <h2 className="play p-3 py-4 text-red-300 bg-amber-950 fixed rounded-full opacity-0 scale-0">
          PLAY
        </h2>

        <video
          autoPlay={true}
          muted={true}
          loop={true}
          className="mx-auto w-full"
        >
          <source src={video} />
        </video>
      </div>

      <hr className="dark:text-green-400 mt-29" />
      <ParagraphHome />
      <hr className="dark:text-green-400" />
      <ContactHome />
    </section>
  );
};

export default Home;
