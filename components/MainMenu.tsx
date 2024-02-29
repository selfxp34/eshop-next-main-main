"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as React from "react";
import {
  LayoutDashboard,
  User,
  Cart,
  ShoppingCart,
  Heart,
  PackageSearch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function MainMenu() {
  const [goal, setGoal] = React.useState(350);
  const session = useSession();
  const router = useRouter();

  if (session.data?.user)
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <MenuIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
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

            <div className="p-4 pb-0">
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
                      </Link>
                    </DrawerClose>
                  </li>
                  <li>
                    <DrawerClose asChild>
                      <Link href={"/profile"} className="flex gap-2">
                        <Heart />
                        Избранное
                      </Link>
                    </DrawerClose>
                  </li>
                  <li>
                    <DrawerClose asChild>
                      <Link href={"/profile"} className="flex gap-2">
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
    );
  else {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="mb-8 ml-33">Войти</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="text-center mr-3">
                VOLGA-SHOP.ru
              </DrawerTitle>
              <DrawerDescription className="text-center mr-3">
                Войдете через социальные сети
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <nav>
                <ul className="flex flex-col gap-3">
                  <li>
                    <DrawerClose asChild></DrawerClose>
                  </li>
                </ul>
              </nav>
            </div>

            <DrawerFooter>
              <div className="image-links cursor-pointer">
                <a onClick={() => signIn()}>
                  <Image
                    className="mr-11"
                    src="/google-logo.svg"
                    alt="Моё изображение"
                    width={50}
                    height={50}
                  />
                </a>
                <a onClick={() => signIn()}>
                  <Image
                    className="mr-11"
                    src="/vk-logo.svg"
                    alt="Моё изображение"
                    width={46}
                    height={46}
                  />
                </a>
                <a onClick={() => signIn()}>
                  <Image
                    className="mr-11"
                    src="/ok-logo.svg"
                    alt="Моё изображение"
                    width={46}
                    height={46}
                  />
                </a>
                <a onClick={() => signIn()}>
                  <Image
                    className="mr-11"
                    src="/yandex-logo.svg"
                    alt="Моё изображение"
                    width={46}
                    height={46}
                  />
                </a>
                <a onClick={() => signIn()}>
                  <Image
                    className="mr-11"
                    src="/mail-logo.svg"
                    alt="Моё изображение"
                    width={46}
                    height={46}
                  />
                </a>
              </div>
              <DrawerClose asChild></DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }
}
