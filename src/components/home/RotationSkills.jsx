import { useState, useEffect } from "react";
import skills from "../../data/data";

function RotationSkills() {
  const [radius, setRadius] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 620) {
        setRadius(165);
      } else if (window.innerWidth < 1020) {
        setRadius(300); // mobile
      } else {
        setRadius(500); // desktop
      }
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="skillsCircle relative flex justify-center items-center bg-amber-300 text-color rounded-7xl">
      <div className="absolute w-[100%] h-[100%] flex items-center justify-center rounded-full max-md:w-screen ">
        <div className="circle my-4 size-24 rounded-3xl bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 flex justify-center items-center">
          <div className="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"></div>
        </div>
      </div>
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * 360;
        const transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
        return (
          <div
            key={index}
            style={{ transform }}
            className={`absolute text-lg font-bold origin-[0, 100px] bg-[#ecdcdc] p-2 rounded-full`}
          >
            <i className={`${skill.icon} text-3xl -p-20 `}>{skill.img}</i>
          </div>
        );
      })}
    </div>
  );
}

export default RotationSkills;
