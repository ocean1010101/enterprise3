"use client";
import { createContext, useContext, useState, useEffect } from "react";

type SettingsContextType = {
  theme: string;
  setTheme: (t: string) => void;
  textSize: number;
  setTextSize: (s: number) => void;
  reducedMotion: boolean;
  setReducedMotion: (val: boolean) => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");
  const [textSize, setTextSize] = useState(16); // Default 16px
  const [reducedMotion, setReducedMotion] = useState(false); // Default off

  useEffect(() => {
    // Apply theme classes to the body
    document.body.classList.remove("theme-light", "theme-midnight", "theme-contrast");
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  useEffect(() => {
    // Tailwind uses 'rem'. Changing the root pixel size scales the whole app instantly!
    document.documentElement.style.fontSize = `${textSize}px`;
  }, [textSize]);

  // NEW: Apply reduced motion globally
  useEffect(() => {
    if (reducedMotion) {
      document.body.classList.add("reduce-motion");
    } else {
      document.body.classList.remove("reduce-motion");
    }
  }, [reducedMotion]);

  return (
    <SettingsContext.Provider value={{ theme, setTheme, textSize, setTextSize, reducedMotion, setReducedMotion }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("useSettings must be used within SettingsProvider");
  return context;
};