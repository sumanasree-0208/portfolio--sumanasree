
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Toggle } from "@/components/ui/toggle";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Toggle 
      onClick={toggleTheme}
      className="relative transition-all duration-300 ease-in-out w-10 h-10 rounded-full hover:bg-muted"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 animate-fade-in text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 animate-fade-in text-purple-700" />
      )}
    </Toggle>
  );
}
