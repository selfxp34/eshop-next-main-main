"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { BarChart, Heart } from "lucide-react";
import React from "react";
import addToCartAction from "./addToCartAction";
import "./css/ButtonCard.css";

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
      <Button
        className="center-button bg-green-600"
        onClick={async () => {
          // await addToCartAction(product.id);
          fetch("/api/cart", {
            method: "POST",
            headers: {
              "content-Type": "application/json",
            },
            body: JSON.stringify({
              productId: product.id,
              quantity: 1,
            }),
          });
        }}
      >
        В корзину
      </Button>
    </>
  );
}
