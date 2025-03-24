import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);

  useGSAP(() => {
    gsap.from(formRef.current, {
      y: 80,
      duration: 0.8,
      stagger: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: formRef.current,
        scroller: "body",
        start: "top 70%",
      },
    });
    gsap.from(".con", {
      y: 130,
      duration: 0.5,
      stagger: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".con",
        scroller: "body",
        start: "top 40%",
      },
    });
    gsap.to(".txt", {
      transform: "translateX(-46%)",
      duration: 1,
      scrollTrigger: {
        trigger: ".txte",
        scroller: "body",
        start: "top 18%",
        end: "top -150%",
        scrub: 2,
        pin: true,
      },
    });
  }, []);

  return (
    <>
      <div className="txte w-screen h-[70vh] flex items-center mt-4">
        <h1 className="txt text-[10vw] font-extrabold dark:text-[#69f7fa]">
          Do_You_Want_To_Create_A_Project_?
        </h1>
      </div>
      <div className="svg flex flex-col justify-center items-center backdrop-blur-sm bg-white/30 mix-blend-color-burn dark:bg-amber-50">
        <form
          ref={formRef}
          className="flex flex-col justify-center items-center h-9/10 p-4 max-md:h-auto w-3xl mt-8 space-y-4 max-md:w-screen"
        >
          <h2 className="con text-6xl font-bold text-gray-800 dark:text-[#d5eaf8]">
            Contact Me
          </h2>
          <input
            type="text"
            placeholder="Name"
            className="con w-full p-2 border-2 border-x-transparent border-t-transparent rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="con w-full p-2 border-2 border-x-transparent border-t-transparent rounded"
          />
          <textarea
            placeholder="Message"
            className="con w-full p-2 border-2 border-x-transparent border-t-transparent rounded"
          />
          <button
            type="submit"
            className="con bg-[#2e2f44] text-white rounded hover:bg-blue-600 hover:shadow-lg max-md:hover:shadow-lg shadow-[#2e2f44] px-4 py-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
