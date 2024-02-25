import AppBarAuth from "@/features/user/AppBarAuth";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import LogoName from "./LogoName";

export default function AppBar() {
  return (
    <header
      className="flex gap-4 justify-between items-center h-16 px-4 shadow-md
     shadow-slate-600 dark:shadow-slate-100"
    >
      <Logo />
      <LogoName />
      <nav>
        <Link href={"/"} className="">
          Main page
        </Link>
      </nav>
      <AppBarAuth />
    </header>
  );
}
