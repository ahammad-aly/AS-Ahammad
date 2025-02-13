import React from "react";
import skills from "../data/data";
import Marquee from "react-fast-marquee";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function AboutSkills() {
  useGSAP(() => {
    gsap.from(".skils", {
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".skils",
        scrub: true,
      },
    });
  });

  return (
    <div className="bg-no-repeat bg-cover bg-center ontainer mx-auto px-4 max-md:w-auto ">
      <h2 className="skils text-4xl font-bold text-center outline-none text-gray-800 dark:text-[#aa47b3] mt-58 max-md:mt-14">
        Front-End Skills
      </h2>
      <hr className="m-5 dark:text-green-400 max-md:m-1" />
      <Marquee direction="right" pauseOnHover="true">
        <div className="flex m-3.5 md:grid-cols-2 lg:grid-cols-3 gap-6 max-md:mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="curdM w-50 h-55 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="space-x-4 mb-4">
                <i className={`${skill.icon} text-3xl`}></i>
                {skill.img}
                <h3 className="text-2xl mt-4 font-semibold text-[#6dedc5] dark:text-white">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
      <hr className="dark:text-green-400 m-3" />
      <Marquee direction="left" gradientColor="#0f575c" gradient="true">
        <div className="flex m-3.5 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="curdM w-50 h-55 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="space-x-4 mb-4">
                <i className={`${skill.icon} text-3xl`}></i>
                {skill.img}
                <h3 className="text-2xl mt-4 font-semibold text-[#6dedc5] dark:text-white">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
      <hr className="dark:text-green-400 m-3" />
    </div>
  );
}

export default AboutSkills;
