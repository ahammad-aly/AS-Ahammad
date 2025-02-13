import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import skills from "../data/data";

const Skills = () => {
  const skillsRef = useRef(null);

  useGSAP(() => {
    gsap.from(skillsRef.current.children, {
      opacity: 4,
      y: 150,
      stagger: 0.1,
      duration: 0.5,
    });
  }, []);

  return (
    <section className="py-12 min-h-screen bg-[#9c8bf8] dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white my-8">
          Front-End Skills
        </h2>
        <div
          ref={skillsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:animate-pulse"
            >
              <div className="flex items-center space-x-4 mb-4">
                <i className={`${skill.icon} text-3xl`}></i>
                {skill.img}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {skill.level}% Proficiency
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
