"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession, signOut } from "next-auth/react";
import { ThemeToggler } from "@/components/ThemeToggler";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import {
  Heart,
  MenuIcon,
  PackageSearch,
  ShoppingCart,
  User,
  UserCheck,
  UserRoundCheck,
} from "lucide-react";
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useGetFavorites } from "../favorites/use-favorites";
import TotalCartItems from "@/components/TotalCartItems";
import RatingComponent from "../ratingStars/RatingComponent";

export default function AppBarAuth() {
  const session = useSession();
  const router = useRouter();
  const { favorites } = useGetFavorites();
  if (session.data?.user) {
    return (
      <div className="flex justify-end gap-4 ">
        <p className="mr-13">{/* <ThemeToggler /> */}</p>
        {favorites && favorites.length > 0 ? (
          <Button
            size={"icon"}
            variant={"secondary"}
            onClick={() => router.push("/favorites")}
          >
            <Heart />
          </Button>
        ) : null}
        <Drawer>
          <DrawerTrigger asChild>
            <Button size={"icon"}>
              <UserRoundCheck />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm ">
              <DrawerHeader>
                <DrawerDescription>
                  <p className="flex justify-center mb-3">
                    <Avatar>
                      <AvatarImage
                        src={session.data.user.image ?? undefined}
                        alt={session.data.user.name ?? undefined}
                      />
                    </Avatar>
                  </p>
                  <p className="flex justify-center">
                    Добро пожаловать! {session.data.user.name}
                  </p>
                </DrawerDescription>
              </DrawerHeader>

              <div className="p-4 pb-0 ">
                <nav>
                  <ul className="flex  flex-col gap-3 justify-center mb-4">
                    <li>
                      <DrawerClose asChild>
                        <Link href={"/profile"} className="flex gap-3">
                          <User />
                          Профиль
                        </Link>
                      </DrawerClose>
                    </li>
                    <li>
                      <DrawerClose asChild>
                        <Link href={"/cart"} className="flex gap-3">
                          <ShoppingCart />
                          Корзина
                          <div className="mt-1">
                            <TotalCartItems />
                          </div>
                        </Link>
                      </DrawerClose>
                    </li>
                    <li>
                      <DrawerClose asChild>
                        <Link href={"/favorites"} className="flex gap-2">
                          <Heart />
                          Избранное
                        </Link>
                      </DrawerClose>
                    </li>
                    <li>
                      <DrawerClose asChild>
                        <Link href={"/orders"} className="flex gap-2">
                          <PackageSearch />
                          Заказы
                        </Link>
                      </DrawerClose>
                    </li>
                  </ul>
                </nav>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button onClick={() => signOut()}>Выйти</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
        <Button
          size={"icon"}
          onClick={() => {
            router.push("/cart");
          }}
        >
          <TotalCartItems />
          <ShoppingCart />
        </Button>
        <Drawer />
        <DropdownMenu>
          <DropdownMenuContent>
            <DropdownMenuLabel>Ваш аккаунт</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={() => signOut()}>Выйти</DropdownMenuItem>
            <DropdownMenuItem></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
}
