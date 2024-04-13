import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={80} height={80} />
      </Link>
    </div>
  );
}
