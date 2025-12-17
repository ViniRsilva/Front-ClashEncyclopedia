import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  function getInitialTheme(): Theme {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const preferDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = storedTheme || (preferDark ? "dark" : "light");
    return initialTheme;
  }

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return { theme, toggleTheme };
}
