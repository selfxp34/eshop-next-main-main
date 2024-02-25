"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { BarChart, Heart } from "lucide-react";
import React from "react";
import addToCartAction from "./addToCartAction";

type Props = {
  product: Product;
};

export default function AddToCart({ product }: Props) {
  return (
    <>
      <Button
        className="hover:text-red-500 "
        title="Добавить в избранное"
        variant="outline"
        size={"icon"}
      >
        <Heart />
      </Button>
      <Button className="w-12 h-9" title="Сравнить">
        <BarChart />
      </Button>
      <Button
        className="w-22 h-9 mr-8"
        onClick={async () => {
          await addToCartAction();
        }}
      >
        В корзину
      </Button>
    </>
  );
}
