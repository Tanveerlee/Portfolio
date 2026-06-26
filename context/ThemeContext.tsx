"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  isAuto: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
  isAuto: true,
});

function timeBasedTheme(): Theme {
  const h = new Date().getHours();
  // Light: 8 AM – 8 PM (20:00), Dark: 8 PM – 8 AM
  return h >= 8 && h < 20 ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isAuto, setIsAuto] = useState(true);

  // On mount: always start from the current time (clear any stale override)
  useEffect(() => {
    localStorage.removeItem("pf-theme");
    localStorage.removeItem("pf-theme-auto");
    setTheme(timeBasedTheme());
  }, []);

  // Sync data-theme attribute to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Auto-update every minute when in auto mode
  useEffect(() => {
    if (!isAuto) return;
    const id = setInterval(() => setTheme(timeBasedTheme()), 60_000);
    return () => clearInterval(id);
  }, [isAuto]);

  const toggleTheme = () => {
    setIsAuto(false);
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isAuto }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
