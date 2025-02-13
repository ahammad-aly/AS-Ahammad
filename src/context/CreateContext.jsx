import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./them.js";

function CreateContext({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ lightTheme, darkTheme, themeMode }}>
      {children}
    </ThemeProvider>
  );
}

export default CreateContext;
