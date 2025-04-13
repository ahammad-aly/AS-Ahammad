import { useRef, useState, useEffect } from "react";
import "../index.css";
import useTheme from "../context/them";
import { gsap } from "gsap";
import video from "../assets/webvideo.mp4";
import image from "../assets/mypic.png";
import { useGSAP } from "@gsap/react";
import svgs from "../assets/landing.svg";
import ContactHome from "../home/ContactHome";
import AboutSkills from "../home/AboutSkills";
import { motion } from "motion/react";
import ParagraphHome from "../home/ParagraphHome";
import skills from "../data/data";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const { FlipLink } = useTheme();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".p", {
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.4,
    }).from(".svg", {
      y: 50,
      opacity: 0,
      duration: 0.7,
      delay: 0.2,
      stagger: 0.2,
    });
    gsap.from(".video", {
      opacity: 0,
      y: 150,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".video",
        scroller: "body",
        start: "top 90%",
      },
    });
  });

  function enter() {
    gsap.to(".play", {
      scale: 1,
      opacity: 1,
    });
  }
  function leave() {
    gsap.to(".play", {
      scale: 0,
      opacity: 0,
    });
  }
  function move(dets) {
    gsap.to(".play", {
      left: dets.clientX - 20,
      top: dets.clientY + 20,
    });
    // console.log(dets);
  }

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const transform = `rotate(360deg) translate(100px) rotate(-360deg)`;

  const [radius, setRadius] = useState(500); // default for desktop

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
    <section className="min-h-screen bg-linear-to-r/srgb from-indigo-500 to-teal-400 dark:bg-radial-[at_25%_25%] dark:from-gray-500 dark:to-zinc-900 flex-col">
      <div className="flex justify-center items-center py-28 max-md:flex-col max-md:pt-20">
        <img src={svgs} className="svg w-1/2 max-md:hidden" />
        <div className="flex flex-col px-20 max-md:px-5 bg-transparent">
          <img
            src={image}
            className="svg mb-4 h-[60vh] w-[30vw] rounded-4xl max-md:h-auto max-xl:h-auto object-cover border-4 border-white"
          />
          <div ref={heroRef} className="text-center">
            <h1 className="text-7xl max-md:text-2xl cursor-pointer ">
              WELLCOME
            </h1>
            <h3 className="p cursor-pointer mt-4 text-5xl text-gray-600 dark:text-gray-300 max-md:text-xl">
              {"I build modern, "}
              <FlipLink className="lowercase py-1.5">responsive</FlipLink>
              {" web applications."}
            </h3>
          </div>
        </div>
      </div>
      <hr className="dark:text-green-400" />
      <AboutSkills />

      {/* chart integrating */}

      <div className="relative h-[80vh] px-4 w-screen max-md:w-screen max-md:h-78 flex items-center flex-col bg-amber-200 mix-blend-color-burn">
        <div className="absolute bottom-0 left-0 w-full text-[#9180f5] p-4 flex items-center flex-col">
          <h2 className="text-3xl max-md:text-lg max-md:mb-17">
            Let's build up together!
          </h2>
          <motion.div
            animate={{ rotate: 360, duration: 20 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className={`size-24 rounded-3xl bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 flex justify-center items-center`}
          >
            <div className="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"></div>
          </motion.div>
          <LineChart
            width={600}
            height={250}
            data={data}
            className="bg-amber-400 rounded-2xl max-xl:w-screen max-lg:hidden"
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
      <motion.div
        animate={{ rotate: 360, duration: 25 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="relative flex justify-center items-center bg-amber-300 text-white rounded-7xl"
      >
        <div className="absolute w-[100%] h-[100%] flex items-center justify-center rounded-full max-md:w-screen "></div>
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
      </motion.div>
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
          className="video mx-auto w-full"
        >
          <source src={video} />
        </video>
      </div>

      <hr className="dark:text-green-400 mt-29" />
      <ParagraphHome FlipLink={FlipLink} />
      <hr className="dark:text-green-400" />
      <ContactHome />
    </section>
  );
};

export default Home;
