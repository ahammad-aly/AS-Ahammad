import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

// Home.jsx gsap code
export function homeGsap(ref) {
  useGSAP(() => {
    // Home.jsx gsap code
    const tl = gsap.timeline();
    tl.from(".p", {
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
    }).from(".svg", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
    });

    gsap.from(".chart", {
      opacity: 0,
      y: 150,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".chart",
        scroller: "body",
        start: "top 90%",
      },
    });

    // RotationSkills gsap code
    gsap.to(".skillsCircle", {
      rotate: 360,
      ease: "linear",
      repeat: -1,
      duration: 26,
      transformOrigin: "center center",
    });

    gsap.to(".circle", {
      rotate: 360,
      repeat: -1,
      duration: 18,
      ease: "linear",
      transformOrigin: "center center",
    });

    // ParagraphHome.jsx gsap code
    gsap.from(".contant", {
      y: 60,
      stagger: 0.5,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".contant",
        scroller: "body",
        start: "top 60%",
      },
    });
    gsap.from(".titl", {
      scale: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".titl",
        scroller: "body",
        start: "top 70%",
      },
    });

    // AboutSkills.jsx gsap code
    gsap.from(".skils", {
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".skils",
        scrub: true,
      },
    });

    // ContactHome.jsx gsap code
    gsap.from(".form", {
      y: 80,
      duration: 0.8,
      stagger: 0.5,
      opacity: 0,
    });
    gsap.from(".con", {
      y: 60,
      duration: 0.5,
      stagger: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".con",
        scroller: "body",
        start: "top 10%",
      },
    });
    gsap.to(".txt", {
      xPercent: -46,
      // ease: "none",
      scrollTrigger: {
        trigger: ".txte",
        scroller: `body`,
        start: "top top",
        end: "+=2000",
        scrub: 2,
        pin: true,
      },
    });
  }, [ref.homeRef]);
}

// Navbar.jsx gsap code
export function navbarGsap(ref) {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    // 🖥️ Desktop (≥768px)
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".nav-body",
          start: "400px top",
          toggleActions: "play none reverse none",
        },
      });

      tl.to(".nav-body", {
        width: "56rem", // same as Tailwind's max-w-4xl
        borderRadius: 100,
        duration: 2,
        ease: "power2.inOut",
      });

      gsap.to(".title", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".title",
          scroller: "body",
          start: "top 0",
          end: "top -5%",
          scrub: 2,
        },
      });

      gsap.to(".h2", {
        y: "-35",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".h2",
          scroller: "body",
          start: "top 0",
          end: "top -5%",
          scrub: 2,
        },
      });

      return () => gsap.set(".nav-body", { clearProps: "all" });
    });

    // 📱 Mobile & Tablet (<768px)
    mm.add("(max-width: 767px)", () => {
      gsap.to(".title", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".title",
          start: "top 0",
          end: "top -5%",
          scrub: 2,
        },
      });

      gsap.to(".h2", {
        y: "-39",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".h2",
          start: "top 0",
          end: "top -5%",
          scrub: 2,
        },
      });

      // 👇 smaller width for mobile
      gsap.to(".nav-body", {
        width: "90%", // or use a pixel value like "20rem"
        borderRadius: 50,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".nav-body",
          start: "400px top",
          toggleActions: "play none reverse",
        },
      });
    });

    return () => mm.revert(); // ✅ cleanup when component unmounts
  }, [ref.navbarGsaps]);
}

export function toggleDropdown(ref) {
  if (ref.isOpen) {
    // 👇 Open animation
    gsap.fromTo(
      ref.ref,
      { opacity: 0, y: -20, display: "none" },
      {
        opacity: 1,
        y: 0,
        display: "block",
        duration: 0.6,
        ease: "power2.out",
      }
    );
  } else {
    // 👇 Close animation
    gsap.to(ref.ref, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(ref.ref, { display: "none" });
      },
    });
  }
}
// About.jsx gsap code
export function aboutGsap(ref) {
  useGSAP(() => {
    gsap.from(".title", {
      y: 100,
      opacity: 0,
      stagger: 0.3,
      duration: 0.5,
    });
    gsap.from(".span", {
      rotateX: 360,
      delay: 2,
      duration: 1,
    });

    // skilled.jsx gsap code
    gsap.from(".curd", {
      y: 80,
      duration: 0.8,
      stagger: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".curd",
        scroller: "body",
        start: "top 60%",
      },
    });

    gsap.from(".skill", {
      scale: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".skill",
        scroller: "body",
        start: "top 60%",
      },
    });
  }, [ref.aboutGsaps]);
}

// Home.jsx video enter, leave, and move gsap code
export function enter() {
  gsap.to(".play", {
    scale: 1,
    opacity: 1,
  });
}
export function leave() {
  gsap.to(".play", {
    scale: 0,
    opacity: 0,
  });
}
export function move(dets) {
  gsap.to(".play", {
    left: dets.clientX - 20,
    top: dets.clientY + 20,
  });
}

// skills.jsx gsap code
export function skillsGsap(ref) {
  useGSAP(() => {
    const bars = gsap.utils.toArray(".level");
    gsap.set(bars, { width: 0 });

    bars.forEach((bar, i) => {
      const level = ref.skills[i].level; // take from your array
      gsap.to(bar, {
        width: `${level}%`,
        duration: 1,
        ease: "power2.out",
        delay: i * 0.1, // small stagger
      });
    });
    gsap.from(ref.skillsRef, {
      opacity: 4,
      y: 150,
      stagger: 0.1,
      duration: 0.5,
    });
  }, [ref.skillsRef]);
}
