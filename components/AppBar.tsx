import AppBarAuth from "@/features/user/AppBarAuth";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import LogoName from "./LogoName";
import { MainMenu } from "./MainMenu";
export default function AppBar() {
  return (
    <header
      className="flex  justify-between items-center h-25 px-4 shadow-md
     shadow-slate-600 dark:shadow-slate-100"
    >
      <div className="mt-6 ">
        <MainMenu />
      </div>
      <Logo />
      <LogoName />
      <AppBarAuth />
      <nav></nav>
    </header>
  );
}
