import { DiCss3, DiJsBadge, DiGit } from "react-icons/di";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiGreensock,
  SiRedux,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";

const skills = [
  {
    name: "HTML",
    title: "I am very proficient in HTML and can work in any way you prefer.",
    level: 95,
    icon: "fab fa-html5 text-orange-500",
    img: <FaHtml5 className="text-orange-500 text-7xl" />,
  },
  {
    name: "CSS",
    title:
      "I work very responsively and effectively with CSS, and I can also work in whatever way you prefer.",
    level: 95,
    icon: "fab fa-css3-alt text-blue-500",
    img: <DiCss3 className="text-blue-500 text-7xl" />,
  },
  {
    name: "JavaScript",
    title:
      "Mastering Responsive and Effective HTML, CSS with JavaScript Integration.",
    level: 90,
    icon: "fab fa-js-square text-yellow-500",
    img: <FaJsSquare className="text-7xl text-yellow-500" />,
  },
  {
    name: "React",
    title: "Building Responsive and Dynamic UIs with React and CSS.",
    level: 85,
    icon: "fab fa-react text-blue-400",
    img: <FaReact className="text-blue-400 text-7xl" />,
  },
  {
    name: "Tailwind CSS",
    title: "Creating Responsive and Stylish UIs with Tailwind CSS.",
    level: 95,
    icon: "fab fa-css3-alt text-teal-500",
    img: <SiTailwindcss className="text-teal-500 text-7xl" />,
  },
  {
    name: "GSAP",
    title: "Smooth Animations and Interactions with GSAP.",
    level: 85,
    icon: "fas fa-code text-green-500",
    img: <SiGreensock className="text-green-500 text-7xl" />,
  },
  {
    name: "Git",
    title:
      "Mastering Git: Version Control, Collaboration, and Workflow Optimization.",

    level: 80,
    icon: "fas fa-code text-green-500",
    img: <DiGit className="text-red-500 text-7xl" />,
  },
  {
    name: "Redux",
    title:
      "State Management Made Easy: Mastering Redux for Scalable React Applications.",
    level: 80,
    icon: "fas fa-code text-green-500",
    img: <SiRedux className="text-[#9342f5] text-7xl" />,
  },
  {
    name: "Node.js",
    title: "Experienced in building scalable backend services with Node.js.",
    level: 70,
    icon: "fas fa-code text-green-500",
    img: <IoLogoNodejs className="text-[#6342f5] text-7xl" />,
  },
  {
    name: "Express",
    title:
      "building fast and secure RESTful APIs with Express, handling routing, middleware, and backend logic.",
    level: 80,
    icon: "fas fa-code text-green-500",
    img: <SiExpress className="text-[#a687cc] text-7xl" />,
  },
  {
    name: "MongoDB",
    title:
      "Proficient in MongoDB for designing scalable databases and optimizing data models.",
    level: 60,
    icon: "fas fa-code text-green-500",
    img: <SiMongodb className="text-[#42f578] text-7xl" />,
  },
];

export default skills;
