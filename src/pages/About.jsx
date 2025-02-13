import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaChildReaching } from "react-icons/fa6";
import my from "../assets/about.svg";
import { Typed } from "react-typed";
import Skilled from "../data/Skilled";

const About = () => {
  const aboutRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(".titl", {
      strings: ["<i>I am Ahammad</i>"],
      typeSpeed: 140,
      cursorChar: "",
    });

    return () => {
      typed.destroy();
    };
  }, []);
  useGSAP(() => {
    gsap.from(".title", {
      y: 100,
      opacity: 0,
      stagger: 0.3,
      duration: 0.5,
    });
  });

  return (
    <section className="min-h-screen p-8 bg-[#9c8bf8] dark:bg-gray-800">
      <div className="container flex justify-center mx-auto mt-17 p-6 text-center max-md:flex-col max-md:w-auto">
        <div className="flex flex-col w-1/2 justify-center text-center max-md:w-full">
          <img
            src={my}
            className="title ml-7 rounded-xl mx-auto  max-md:mx-auto"
          />
          <div className="flex my-8">
            <h1 className="title dark:text-green-300 text-5xl max-md:hidden">
              Hello,
            </h1>
            <h1 className="titl flex dark:text-green-300 text-5xl ml-4"></h1>
          </div>
        </div>
        <div className="flex flex-col w-1/2 justify-center text-center max-md:w-full">
          <h1 className="title flex my-9 dark:text-green-300 text-5xl">
            Hey There
            <FaChildReaching className="text-green-400 text-2xl" />
          </h1>
          <p className="title text-xl font-extrabold text-gray-600 dark:text-[#4bdbcd]">
            I'm a passionate{" "}
            <span className="text-blue-500 font-semibold">
              Front-End Engineer
            </span>{" "}
            specializing in building interactive, user-friendly web
            applications. I have expertise in
            <span className="text-orange-500 font-semibold"> HTML</span>,
            <span className="text-blue-500 font-semibold"> CSS</span>,
            <span className="text-yellow-500 font-semibold"> Javascript</span>,
            <span className="text-blue-500 font-semibold"> React.js</span>,
            <span className="text-teal-500 font-semibold"> Tailwind CSS</span>,
            and
            <span className="text-green-500 font-semibold"> GSAP</span>,
            creating smooth animations and seamless user experiences. Constantly
            learning and pushing boundaries, I strive to turn ideas into reality
            with clean, efficient code.
          </p>
        </div>
      </div>
      <hr className="dark:text-teal-400 mt-19" />
      <Skilled />
    </section>
  );
};

export default About;
