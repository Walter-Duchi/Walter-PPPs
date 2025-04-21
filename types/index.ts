import { Session } from "next-auth";

export interface sessionContextTypes {
  session: Session | null;
  setSession: (session: Session) => void;
}

export interface user {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface navLink {
  title: string;
  href: string;
  description: string;
}
