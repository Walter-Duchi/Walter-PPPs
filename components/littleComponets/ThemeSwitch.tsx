"use client";

import { useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
export const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [enabled, setEnabled] = useState(currentTheme === "dark");
  const toggleDarkMode = () => {
    setEnabled(!enabled);
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button onPress={toggleDarkMode} variant="light" size="sm" isIconOnly className="text-default-500 text-medium">
      {currentTheme !== "dark" ? <HiSun/> : <HiMoon/>}
    </Button>
  );
};
