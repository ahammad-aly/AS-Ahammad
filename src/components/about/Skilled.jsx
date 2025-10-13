import skills from "../../data/data";

function Skilled() {
  return (
    <div className="mx-auto px-4">
      <h2 className="skill text-4xl my-16 font-bold text-center text-color">
        My Skills
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
              <h3 className="text-2xl font-semibold text-color">
                {skill.name}
              </h3>
            </div>
            <h5 className="text-color text-xl">{skill.title}</h5>
          </div>
        ))}
      </div>

      <hr className="dark:text-green-400" />
    </div>
  );
}

export default Skilled;
