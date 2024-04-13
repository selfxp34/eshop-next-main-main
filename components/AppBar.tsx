import AppBarAuth from "@/features/user/AppBarAuth";
import React from "react";
import { MainMenu } from "./MainMenu";
import Logo from "./Logo";
import { ThemeToggler } from "./ThemeToggler";

export default function AppBar() {
  return (
    <>
      <header className="flex rounded-lg justify-between items-center h-25 px-4 shadow-md p-4">
        <MainMenu />
        <div className="mt-1"></div>
        <div className="flex justify-end items-center">
          <div className="mr-3">
            <AppBarAuth />
          </div>
        </div>
      </header>
    </>
  );
}
