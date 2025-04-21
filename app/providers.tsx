"use client";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  
  return (
    <ThemeProvider 
      enableSystem={true} 
      attribute="class"
      defaultTheme="light"
    >
      <NextUIProvider 
        navigate={router.push}
        className="h-full flex flex-col"
      >
        {children}
      </NextUIProvider>
    </ThemeProvider>
  );
};