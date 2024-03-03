import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "@/components/Providers";
import Carusel from "@/components/Carusel";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";
import AppBar from "@/components/AppBar";

import Link from "next/link";
import Menu from "@/components/Menu";

import { ToastProvider } from "@radix-ui/react-toast";
import { Toaster } from "@/components/ui/toaster";
// import { NavigationMenu } from "@/components/ui/navigation-menu";

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
          <div className="mt-5 flex gap-2 ml-24">
            <Menu />
          </div>
          <Carusel />
          <main className="container py-6">{children}</main>
        </Providers>
        <Footer />
        <ScrollButton />
        <Toaster />
      </body>
    </html>
  );
}
