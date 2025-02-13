import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import contact from "../assets/contact.jpg";
import ContactText from "../data/ContactText";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".rForm", { x: 400, duration: 0.8 });
  });

  return (
    <section
      style={{ backgroundImage: `url(${contact})` }}
      className={`flex justify-center items-center h-auto bg-no-repeat bg-cover bg-center min-h-screen p-8 bg-gray-100 dark:bg-gray-900`}
    >
      <div className="flex items-center overflow-hidden backdrop-blur-sm bg-white/30 rounded-2xl max-w-5xl mx-auto max-md:flex-col dark:bg-gray-500">
        <ContactText />

        <form className="rForm h-9/10 w-1/2 p-4 max-md:h-auto max-md:w-auto mt-8 space-y-4">
          <h2 className="text-6xl font-bold text-gray-800 dark:text-[#94ff08]">
            Contact
          </h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <button
            type="submit"
            className="text-white rounded hover:bg-blue-600 hover:shadow-lg max-md:hover:shadow-lg shadow-[#2e2f44] px-4 py-2 bg-[#2e2f44]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
