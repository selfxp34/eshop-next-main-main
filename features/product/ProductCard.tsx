import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@prisma/client";
import { BarChart, Star } from "lucide-react";
import Link from "next/dist/client/link";
import Image from "next/image";
import AddToCart from "./ProductCartWidget";
import "./css/Star.css";
type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card
      className="dark:hover:bg-sky-700 hover:bg-slate-200 transition-transform hover:-translate-y-1 relative pt-32 pb-16"
      key={product.id}
    >
      <CardHeader className="flex items-center  justify-between absolute top-0">
        <div className="">
          <CardTitle className="text-sm ">
            <Link href={"/product/" + product.id}>{product.name}</Link>
          </CardTitle>
          <CardDescription className="text-xs">{product.desc}</CardDescription>
        </div>
      </CardHeader>
      {/* <CardContent className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"> */}
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
      </CardContent>
      <CardContent className="mt-4">{product.price} ₽</CardContent>
      <CardFooter className="flex justify-between absolute mb-4">
        <AddToCart product={product} />
      </CardFooter>
    </Card>
  );
}
