import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "@/components/Providers";
import Carusel from "@/components/Carusel";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";
import { MainMenu } from "@/components/MainMenu";
import AppBarAuth from "@/features/user/AppBarAuth";
import AppBar from "@/components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppBar />
          <Carusel />
          <main className="container py-6">{children}</main>
        </Providers>
        <Footer />
        <ScrollButton />
      </body>
    </html>
  );
}
