import React from "react";
import ing from "../assets/devHomeImg.svg";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useTheme from "../context/them";
gsap.registerPlugin(ScrollTrigger);

function ParagraphHome() {
  const { FlipLink } = useTheme();

  useGSAP(() => {
    gsap.from(".contant", {
      y: 60,
      stagger: 0.5,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".contant",
        scroller: "body",
        start: "top 90%",
      },
    });
    gsap.from(".titl", {
      scale: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".titl",
        scroller: "body",
        start: "top 120%",
      },
    });
  });

  return (
    <div className="w-full flex justify-center items-center my-50 px-10 max-md:w-auto max-md:flex-col max-md:my-10">
      <img src={ing} className="contant w-2xl max-xl:w-1/2" />
      <div className="ma max-md:mb-26 mx-10">
        <FlipLink className="titl font-bold py-1 cursor-pointer text-[50px] text-[#e4369b] dark:text-white my-3 max-md:text-xl">
          As_part_of_your_responsibility
        </FlipLink>
        <hr className="dark:text-fuchsia-400 m-3" />
        <p className="contant font font-bold text-xl dark:text-[#71d6d6]">
          As a highly skilled Web developer, I specialize in delivering
          efficient, user-friendly, and scalable solutions tailored to meet your
          unique project need. I developed websites with years of experience in{" "}
          <span className="span text-xl dark:text-blue-400 text-[#9d8ff3]">
            HTML
          </span>
          ,{" "}
          <span className="span text-xl dark:text-yellow-400 text-[#bbe20a]">
            CSS
          </span>
          ,{" "}
          <span className="span text-xl dark:text-[#03fcf0] text-[#2cddd7]">
            JavaScript
          </span>{" "}
          <span className="span text-xl dark:text-[#03fcf0] text-[#2cddd7]">
            ReactJs
          </span>{" "}
          <span className="contant span text-xl">e.g.</span>{" "}
          <span className="max-lg:hidden ">
            I take pride in writing clean and maintainable code while ensuring
            fast performance. My strong problem-solving abilities to help create
            a user-friendly web app. Let's collaborate to turn your ideas into
            real life. Your success is my priority.
          </span>
        </p>
      </div>
    </div>
  );
}

export default ParagraphHome;
