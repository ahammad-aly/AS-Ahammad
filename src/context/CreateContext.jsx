import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./them.js";
import FlipLink from "../gsap/FlipText.jsx";

function CreateContext({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  function reset() {
    useEffect(() => {
      // reset scroll to top when component mounts
      window.scrollTo(0, 0);
    }, []);
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider
      value={{
        lightTheme,
        darkTheme,
        themeMode,
        FlipLink,
        reset,
      }}
    >
      {children}
    </ThemeProvider>
  );
}

export default CreateContext;
