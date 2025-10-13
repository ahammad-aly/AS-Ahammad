import skills from "../../data/data";
import Marquee from "react-fast-marquee";

function AboutSkills() {
  return (
    <div className="mx-auto px-4 w-7xl max-md:w-screen">
      <h2 className="skils text-4xl font-bold text-center outline-none text-color mt-5">
        My Skills
      </h2>
      <hr className="m-5 dark:text-green-400 max-md:m-1" />
      <Marquee direction="right" pauseOnHover="true">
        <div className="flex m-3.5 md:grid-cols-2 lg:grid-cols-3 gap-6 max-md:mx-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-50 h-45 bg-white dark:bg-gray-800 p-6 rounded-lg max-md:w-30 max-md:h-30 max-md:flex max-md:justify-center max-md:items-center hover:bg-cyan-500"
            >
              <div className="space-x-4 max-md:w-20 max-md:h-20">
                <i className={`${skill.icon} text-3xl`}>{skill.img}</i>

                <h3 className="text-2xl font-semibold text-color max-md:w-10 max-md:hidden">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
      <hr className="dark:text-green-400 m-3" />
      <Marquee direction="left" gradientColor="#0f575c" gradient="true">
        <div className="flex m-3.5 md:grid-cols-2 lg:grid-cols-3 gap-6 max-md:mx-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-50 h-45 bg-white dark:bg-gray-800 p-6 rounded-lg max-md:w-30 max-md:h-30 max-md:flex max-md:justify-center max-md:items-center hover:bg-cyan-500"
            >
              <div className="space-x-4 max-md:w-20 max-md:h-20">
                <i className={`${skill.icon} text-3xl`}>{skill.img}</i>

                <h3 className="text-2xl font-semibold text-color max-md:w-10 max-md:hidden">
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
