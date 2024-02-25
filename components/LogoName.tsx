import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LogoName() {
  return (
    <div className="flex justify-start gap-4">
      <Link href="/">
        <Image src="/logo_name.png" alt="logo_name" width={280} height={280} />
      </Link>
    </div>
  );
}
