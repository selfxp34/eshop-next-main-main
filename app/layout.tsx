import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";
import AppBar from "@/components/AppBar";
import { Toaster } from "@/components/ui/toaster";

import Logo from "@/components/Logo";
import LogoName from "@/components/LogoName";
import { DropdownMenuDemo } from "@/components/DropdownMenuDemo";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Carusel from "@/components/Carousel";

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
      <meta
        name="google-site-verification"
        content="EXibeSczwJN_4jXyyWcf7TdYabhR8HTPEsgj4CdzWkk"
      />
      <body className={inter.className}>
        <Providers>
          <div
            className="bg-blue-50 p-2 h-1/2"
            style={{
              backgroundImage: 'url("./bg-tel.png")',
            }}
          >
            <LogoName />
            <AppBar />
            <Carusel />
            <div className="flex   p-2 md:p-9">
              <div className="flex items-center m-1">
                <div className="flex items-center">
                  <Input
                    placeholder="Поиск по сайту"
                    className=" text-sm  px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <span className="ml-7 row-auto"></span> <DropdownMenuDemo />
              <div className="flex flex-col items-center mt-2 md:flex-row md:items-center"></div>
            </div>

            <div className="mb-10"></div>
          </div>

          <div className="mt-5 flex gap-2 ml-24"></div>

          <main className="container py-6">{children}</main>
        </Providers>
        <Footer />
        <ScrollButton />
        <Toaster />
      </body>
    </html>
  );
}
