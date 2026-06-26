"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  isAuto: boolean;
  resetAuto: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
  isAuto: true,
  resetAuto: () => {},
});

function timeBasedTheme(): Theme {
  const h = new Date().getHours();
  return h >= 6 && h < 18 ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isAuto, setIsAuto] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("pf-theme") as Theme | null;
    const autoOff = localStorage.getItem("pf-theme-auto") === "false";
    if (autoOff && saved) {
      setIsAuto(false);
      setTheme(saved);
    } else {
      setTheme(timeBasedTheme());
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!isAuto) return;
    const id = setInterval(() => setTheme(timeBasedTheme()), 60_000);
    return () => clearInterval(id);
  }, [isAuto]);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    setIsAuto(false);
    localStorage.setItem("pf-theme", next);
    localStorage.setItem("pf-theme-auto", "false");
  };

  const resetAuto = () => {
    setIsAuto(true);
    setTheme(timeBasedTheme());
    localStorage.removeItem("pf-theme");
    localStorage.removeItem("pf-theme-auto");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isAuto, resetAuto }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
