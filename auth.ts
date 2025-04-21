import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        id: { label: "id" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ password, id }) {
        const res = await fetch(`${process.env.PUBLIC_URL}/api/auth/signIn`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password, id }),
        });
        
        if (!res.ok) return null;
        
        const data = await res.json();
        return data ?? null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        if ('token' in user) {
          token.accessToken = (user as { token: string }).token; // Asegúrate de que tu API devuelve un token
        }
      }
      return token || null;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user.id = token.id as string;
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signIn', // Ruta personalizada para login
    error: '/auth/error',   // Ruta para errores de autenticación
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
});