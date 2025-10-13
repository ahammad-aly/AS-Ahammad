import useTheme from "../../context/them";
import { data } from "../../data/data";
import video from "../../assets/webvideo.mp4";
import ContactHome from "./ContactHome";
import AboutSkills from "./AboutSkills";
import ParagraphHome from "./ParagraphHome";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { enter, leave, move } from "../../gsap/gsapAnimation";
import RotationSkills from "./RotationSkills";

const Home = () => {
  const { FlipLink } = useTheme();

  return (
    <>
      <div className="flex justify-center items-center py-28 max-md:flex-col max-md:pt-20">
        <img src="/svgs/landing.svg" className="svg w-1/2 max-md:hidden" />
        <div className="flex flex-col items-center px-20 max-md:px-5 bg-transparent max-md:items-center">
          <img
            src="/images/mypic.png"
            className="svg mb-4 h-[60vh] w-[30vw] rounded-4xl max-md:h-auto max-xl:h-auto object-cover border-4 "
          />

          <div className="flex flex-col items-center">
            <h3 className="text-4xl">
              <FlipLink>WELLCOME</FlipLink>
            </h3>
            <h3 className="text-xl font-bold">
              I build modern, responsive web applications.
            </h3>
          </div>
        </div>
      </div>
      <hr className="dark:text-green-400" />
      <AboutSkills />

      {/* chart integrating */}

      <div className="relative h-[80vh] px-4 w-screen max-md:w-screen max-md:h-78 flex items-center flex-col mix-blend-color-burn">
        <div className="absolute bottom-0 left-0 w-full  p-4 flex items-center flex-col">
          <h2 className="text-3xl my-4 max-md:text-lg max-md:mb-17">
            Let's build up together!
          </h2>
          {/* <Curcle /> */}
          <LineChart
            width={600}
            height={250}
            data={data}
            className="chart bg-amber-400 rounded-2xl max-xl:w-screen max-lg:hidden"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line
              name="pv of pages"
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
            />
            <Line
              name="uv of pages"
              type="monotone"
              dataKey="uv"
              stroke="#82ca9d"
            />
          </LineChart>
        </div>

        {/* roted animation */}
      </div>
      <RotationSkills />
      <div
        onMouseEnter={enter}
        onMouseLeave={leave}
        onMouseMove={move}
        className="mx-auto relative w-[95%]"
      >
        <h2 className="play cursor-pointer z-50 p-3 py-4 text-red-300 bg-amber-950 fixed rounded-full opacity-0 scale-0">
          PLAY
        </h2>

        <video
          autoPlay={true}
          muted={true}
          loop={true}
          className=" mx-auto w-full rounded-2xl"
        >
          <source src={video} />
        </video>
      </div>

      <hr className="dark:text-green-400 mt-29" />
      <ParagraphHome FlipLink={FlipLink} />
      <hr className="dark:text-green-400" />
      <ContactHome />
    </>
  );
};

export default Home;
