"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession, signOut } from "next-auth/react";
import { ThemeToggler } from "@/components/ThemeToggler";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function AppBarAuth() {
  const session = useSession();
  const router = useRouter();

  if (session.data?.user) {
    return (
      <div className="flex gap-4">
        <Button
          size={"icon"}
          onClick={() => {
            router.push("/favorites");
          }}
        >
          <Heart />
        </Button>
        <Button
          size={"icon"}
          onClick={() => {
            router.push("/cart");
          }}
        >
          <ShoppingCart />
        </Button>
        <ThemeToggler />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage
                src={session.data.user.image ?? undefined}
                alt={session.data.user.name ?? undefined}
              />
              <AvatarFallback>
                {session.data.user.email
                  ? session.data.user.email.slice(0, 2).toUpperCase()
                  : "GO"}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Ваш аккаунт</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={() => signOut()}>Выйти</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
}
