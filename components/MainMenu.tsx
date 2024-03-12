"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as React from "react";
import {
  User,
  ShoppingCart,
  Heart,
  PackageSearch,
  PhoneForwarded,
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

  // Проверяем, есть ли активная сессия пользователя
  const isUserLoggedIn = session.data?.user;
  return (
    <div>
      <span
        className="flex  rounded-lg  shadow-md mr-7
     "
      >
        <PhoneForwarded className="  mr-4 mt-1" /> 80322332404
      </span>
      <Drawer>
        {isUserLoggedIn ? null : (
          <DrawerTrigger asChild>
            <Button className="mr-12 ">Войти</Button>
          </DrawerTrigger>
        )}
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
    </div>
  );
}
