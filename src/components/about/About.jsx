import { useEffect } from "react";
import { FaChildReaching } from "react-icons/fa6";
import { Typed } from "react-typed";
import Skilled from "./Skilled";

const About = () => {
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

  return (
    <>
      <div className="flex justify-center mx-auto mt-17 p-6 text-center max-md:flex-col max-md:w-auto">
        <div className="flex flex-col w-1/2 justify-center text-center max-md:w-full">
          <img
            src="/svgs/about.svg"
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
            Hey <span className="span">There</span>
            <FaChildReaching className="text-green-400 text-2xl" />
          </h1>
          <p className="title text-xl font-extrabold text-color">
            I am a passionate{" "}
            <span className="text-blue-500 font-semibold">
              Front-End Web Developer who
            </span>{" "}
            expert in building interactive, and user-friendly web applications.
            I've expertise in
            <span className="text-orange-500 font-semibold"> HTML</span>,
            <span className="text-blue-500 font-semibold"> CSS</span>,
            <span className="text-yellow-500 font-semibold"> JavaScript</span>,
            <span className="text-blue-500 font-semibold"> ReactJs</span>,
            <span className="text-[#24803b] font-semibold"> Tailwind CSS</span>,
            and
            <span className="text-[#b3219f] font-semibold"> GSAP</span>, to
            creating a smooth animated web app. Constantly learning and pushing
            boundaries, I bring designs to life with clean and efficient code.
          </p>
        </div>
      </div>
      <hr className="dark:text-teal-400 mt-19" />
      <Skilled />
    </>
  );
};

export default About;
