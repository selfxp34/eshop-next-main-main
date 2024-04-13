import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggler } from "./ThemeToggler";

export default function LogoName() {
  return (
    <div className="flex justify-start gap-4">
      {" "}
      <ThemeToggler />
      <Link href="/">
        <Image src="/logo_name.png" alt="logo_name" width={380} height={380} />
      </Link>{" "}
    </div>
  );
}
