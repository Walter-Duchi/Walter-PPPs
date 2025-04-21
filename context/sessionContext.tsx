"use client"
import { sessionContextTypes } from "@/types";
import { Session } from "next-auth";
import { createContext, useState } from "react";

export const sessionContext = createContext<sessionContextTypes | null>(null); 

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  return (
    <sessionContext.Provider value={{
      session,
      setSession
    }}>
      {children}
    </sessionContext.Provider>
  );
}