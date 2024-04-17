import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddToCart from "./ProductCartWidget";
import RatingStars from "../ratingStars/RatingStars";
import { Product } from "@prisma/client";

import { FaStar } from "react-icons/fa";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card
      className="dark:hover:bg-sky-700 hover:bg-slate-100 transition-transform hover:-translate-y-1 relative pt-32 pb-16"
      key={product.id}
    >
      <CardHeader className="flex items-center justify-between absolute top-0">
        <div className="">
          <CardTitle className="text-sm ">
            <Link href={"/product/" + product.id}>{product.name}</Link>
          </CardTitle>
          <CardDescription className="text-xs">{product.desc}</CardDescription>
        </div>
      </CardHeader>
      <span className="ml-2 text-xs flex justify-end mr-4">
        Рейтинг: &nbsp;
        <FaStar className="text-orange-500 mb-3" /> &nbsp;&nbsp;
        {product.ratingAverage}
      </span>

      <CardContent className="py-0">
        <div className="relative h-96 sm:h-72 lg:h-48">
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(min-width: 1560px) 205px, (min-width: 1520px) calc(-340vw + 5441px), (min-width: 1280px) calc(13.64vw + 68px), (min-width: 1040px) calc(33.64vw - 85px), (min-width: 640px) calc(50vw - 89px), calc(100vw - 113px)"
          />
        </div>
        <span className="text-xs text-slate-600 mt-2"></span>
      </CardContent>
      <CardContent className="mt-4 flex items-center">
        <div>{product.price} ₽</div>
        <div className="ml-4 flex items-center">
          <RatingStars product={product} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between absolute mb-4">
        <AddToCart product={product} />
      </CardFooter>
    </Card>
  );
}
