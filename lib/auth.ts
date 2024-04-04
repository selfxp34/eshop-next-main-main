import { db } from "@/prisma/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions, getServerSession } from "next-auth";
import Google from "next-auth/providers/google";
import VkProvider from "next-auth/providers/vk";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export const getAuthSession = () => getServerSession(authOptions);
