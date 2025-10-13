import { useRef } from "react";
import { skillsGsap } from "../gsap/gsapAnimation";
import skills from "../data/data";

const Skills = () => {
  const skillsRef = useRef(null);

  skillsGsap({ skillsRef: skillsRef.current, skills: skills });

  return (
    <div className="mx-auto mt-13 px-4">
      <h2 className="text-4xl font-bold text-center text-color my-8">
        My Skills
      </h2>
      <div
        ref={skillsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient p-6 rounded-lg shadow-md hover:animate-pulse"
          >
            <div className="flex items-center space-x-4 mb-4">
              <i className={`${skill.icon} text-3xl`}></i>
              {skill.img}
              <h3 className="text-xl font-semibold text-color">{skill.name}</h3>
            </div>
            <div className="w-full bg-gray-200 text-color rounded-full h-2.5">
              <div
                className="level bg-blue-500 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-color mt-2 text-sm">
              {skill.level}% Proficiency
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
