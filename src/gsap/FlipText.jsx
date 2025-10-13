import { useEffect, useRef } from "react";
import gsap from "gsap";

function FlipLink({ children, className }) {
  const ref = useRef();
  const DURATION = 0.5;
  const STAGGER = 0.025;

  useEffect(() => {
    const refCurrent = ref.current;
    const topLetters = refCurrent.querySelectorAll(".top span");
    const bottomLetters = refCurrent.querySelectorAll(".bottom span");

    gsap.set(bottomLetters, { yPercent: 100, opacity: 0 });
    const tl = gsap.timeline({ paused: true });
    tl.to(topLetters, {
      yPercent: -100,
      duration: DURATION,
      ease: "power2.inOut",
      delay: STAGGER,
      opacity: 0,
    }).to(
      bottomLetters,
      {
        yPercent: -10,
        opacity: 1,
        duration: DURATION,
        ease: "power2.inOut",
        stagger: STAGGER,
      },
      0
    );

    const onEnter = () => tl.play();
    const onLeave = () => tl.reverse();

    refCurrent.addEventListener("mouseenter", onEnter);
    refCurrent.addEventListener("mouseleave", onLeave);
    // console.log(refCurrent);

    return () => {
      refCurrent.removeEventListener("mouseenter", onEnter);
      refCurrent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden whitespace-nowrap font-black flex items-center ${className}`}
    >
      <div className="top">
        {children?.split("").map((l, i) => (
          <span className="inline-block" key={i}>
            {l}
          </span>
        ))}
      </div>
      <div className="bottom absolute inset-0">
        {children?.split("").map((l, i) => (
          <span className="inline-block" key={i}>
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

export default FlipLink;
