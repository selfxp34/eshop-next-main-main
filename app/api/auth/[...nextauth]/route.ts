import { db } from "@/prisma/db"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

const handler = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ]
})

export { handler as GET, handler as POST }