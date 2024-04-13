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
            <Link href="https://vlgcity.ru/dost-city/mk">
              <Image
                src="/carusel/mmk.png"
                alt="iphone"
                width={100}
                height={100}
              />
            </Link>
          </CarouselItem>

          <CarouselItem className="basis-1/5">
            <Link href="https://vlgcity.ru/dost-city/lenin">
              <Image
                src="/carusel/lenin.png"
                alt="lenin"
                width={110}
                height={110}
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Link href="https://vlgcity.ru/dost-city/vp">
              <Image
                src="/carusel/pla.png"
                alt="nokia"
                width={130}
                height={130}
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Link href="https://vlgcity.ru/dost-city/mk">
              <Image
                src="/carusel/mk2.png"
                alt="xiaomi"
                width={120}
                height={120}
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Link href="https://vlgcity.ru/dost-city/sobornev">
              <Image
                src="/carusel/sab.jpg"
                alt="honor"
                width={100}
                height={100}
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Link href="https://vlgcity.ru/">
              <Image
                src="/carusel/stad.png"
                alt="honor"
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
