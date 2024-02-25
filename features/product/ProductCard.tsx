import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { Product } from "@prisma/client";
import AddToCart from "./AddToCart";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card
      className="dark:hover:bg-sky-700 hover:bg-slate-200 transition-transform hover:-translate-y-1"
      key={product.id}
    >
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={product.img} alt={product.name} width={400} height={500} />
      </CardContent>
      <CardContent>{product.price}$</CardContent>
      <CardFooter className="flex justify-between">
        <AddToCart product={product} />
      </CardFooter>
    </Card>
  );
}
