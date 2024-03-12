import AppBarAuth from "@/features/user/AppBarAuth";
import React from "react";
import { MainMenu } from "./MainMenu";
import Logo from "./Logo";
export default function AppBar() {
  return (
    <header
      className="flex  rounded-lg  justify-end items-center h-25 px-4 shadow-md
     p-4"
      style={{
        backgroundImage: 'url("./bg-tel.png")',
      }}
    >
      <div className="mt-6 ">
        <MainMenu />
      </div>
      <div className="mr-3">
        <Logo />
      </div>
      <AppBarAuth />
      <nav></nav>
    </header>
  );
}
