import React, { useState } from "react";
import skills from "./data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Flip from "gsap-trial/Flip";
import "../index.css";
import { useGSAP } from "@gsap/react";
import { Timeline } from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger, Flip, Timeline);

function Skilled() {
  useGSAP(() => {
    gsap.from(".curd", {
      y: 80,
      duration: 0.8,
      stagger: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".curd",
        scroller: "body",
        start: "top 60%",
      },
    });

    gsap.from(".skill", {
      scale: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".skill",
        scroller: "body",
        start: "top 60%",
      },
    });
  });

  return (
    <div className="container mx-auto px-4">
      <h2 className="skill text-4xl my-16 font-bold text-center text-gray-800 dark:text-white">
        Front-End Skills
      </h2>

      <hr className="mx-auto dark:text-green-400 max-md:w-auto" />

      <div className="max-md:w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="curd bg-[#5cdf7f] text-center mt-8 dark:bg-gray-800 p-6 rounded-lg box-border"
          >
            <div className="body flex items-center space-x-4 mb-4">
              <i className={`${skill.icon} text-3xl`}></i>
              {skill.img}
              <h3 className="h3 text-2xl font-semibold dark:text-white">
                {skill.name}
              </h3>
            </div>
            <h5 className="h5 dark:text-[#639ab0] text-xl">{skill.title}</h5>
          </div>
        ))}
      </div>

      <hr className="dark:text-green-400" />
    </div>
  );
}

export default Skilled;
