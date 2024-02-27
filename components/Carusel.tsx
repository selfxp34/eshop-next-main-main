"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function Carusel() {
  return (
    <div>
      <Carousel>
        <CarouselContent className="flex items-center -ml-2 mt-9">
          <CarouselItem className="basis-1/5">
            <Link href="./catalog/iphone">
              <Image
                src="/carusel/iphone.png"
                alt="iphone"
                width={100}
                height={100}
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Link href="./catalog/samsung">
              <Image
                src="/carusel/samsung.png"
                alt="samsung"
                width={100}
                height={100}
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Link href="./catalog/nokia">
              <Image
                src="/carusel/nokia.png"
                alt="nokia"
                width={100}
                height={100}
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Link href="./catalog/xiaomi">
              <Image
                src="/carusel/xiaomi.png"
                alt="xiaomi"
                width={100}
                height={100}
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Link href="./catalog/honor">
              <Image
                src="/carusel/honor.png"
                alt="honor"
                width={100}
                height={100}
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Link href="./catalog/infinix">
              <Image
                src="/carusel/Infinix.png"
                alt="infinix"
                width={100}
                height={100}
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Link href="./catalog/realmi">
              <Image
                src="/carusel/realne.png"
                alt="realme"
                width={100}
                height={100}
              />
            </Link>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
