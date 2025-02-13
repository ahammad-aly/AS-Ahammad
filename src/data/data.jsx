import { DiCss3, DiJsBadge, DiGit } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiGreensock,
  SiReactrouter,
  SiRedux,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    title: "I am very proficient in HTML and can work in any way you prefer.",
    level: 95,
    icon: "fab fa-html5 text-orange-500",
    img: <FaHtml5 className="text-orange-500 text-8xl" />,
  },
  {
    name: "CSS",
    title:
      "I work very responsively and effectively with CSS, and I can also work in whatever way you prefer.",
    level: 95,
    icon: "fab fa-css3-alt text-blue-500",
    img: <DiCss3 className="text-blue-500 text-8xl" />,
  },
  {
    name: "JavaScript",
    title:
      "Mastering Responsive and Effective HTML, CSS with JavaScript Integration.",
    level: 90,
    icon: "fab fa-js-square text-yellow-500",
    img: <DiJsBadge className="text-yellow-500 text-8xl" />,
  },
  {
    name: "React",
    title: "Building Responsive and Dynamic UIs with React and CSS.",
    level: 85,
    icon: "fab fa-react text-blue-400",
    img: <FaReact className="text-blue-400 text-8xl" />,
  },
  {
    name: "Tailwind CSS",
    title: "Creating Responsive and Stylish UIs with Tailwind CSS.",
    level: 95,
    icon: "fab fa-css3-alt text-teal-500",
    img: <SiTailwindcss className="text-teal-500 text-8xl" />,
  },
  {
    name: "GSAP",
    title: "Smooth Animations and Interactions with GSAP.",
    level: 85,
    icon: "fas fa-code text-green-500",
    img: <SiGreensock className="text-green-500 text-8xl" />,
  },
  {
    name: "Git",
    title:
      "Mastering Git: Version Control, Collaboration, and Workflow Optimization.",

    level: 80,
    icon: "fas fa-code text-green-500",
    img: <DiGit className="text-red-500 text-8xl" />,
  },
  // {
  //   name: "React Router Dom",
  //   title: "Effortless Navigation and Dynamic Routing with React Router DOM.",
  //   level: 85,
  //   icon: "fas fa-code text-green-500",
  //   img: <SiReactrouter className="text-red-500 text-8xl" />,
  // },
  {
    name: "Redux",
    title:
      "State Management Made Easy: Mastering Redux for Scalable React Applications.",
    level: 80,
    icon: "fas fa-code text-green-500",
    img: <SiRedux className="text-[#9342f5] text-8xl" />,
  },
];

export default skills;
