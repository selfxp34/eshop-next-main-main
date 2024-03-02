"use client";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Cart, cartSchema } from "./cart-schema";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Trash2 } from "lucide-react";

export default function CartPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const {
    data: cart,
    isLoading,
    isError,
  } = useQuery<Cart | undefined>({
    queryKey: ["cart"],
    queryFn: () => {
      return fetch("/api/cart")
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) => {
          return cartSchema.parse(data);
        })
        .catch((error) => {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
          return undefined;
        });
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!cart) return <div>Load error</div>;
  const formattedCart: {
    productImg: string;
    productId: number;
    productName: string;
    productDesc: string;
    productPrice: number;
    quantity: number;
  }[] = [];
  cart.cart.forEach((cartItem) => {
    formattedCart.unshift({
      productImg: cartItem.ProductCart[0].Product.img,
      productId: cartItem.ProductCart[0].productId,
      productName: cartItem.ProductCart[0].Product.name,
      productDesc: cartItem.ProductCart[0].Product.desc,
      productPrice: cartItem.ProductCart[0].Product.price,
      quantity: cartItem.ProductCart[0].quantity,
    });
  });
  return (
    <div>
      <h2>Cart</h2>
      <div className="flex flex-col gap-4">
        {formattedCart.map((cartItem) => (
          <Card key={cartItem.productId} className="flex items-center gap-4">
            <div>
              <Image
                src={cartItem.productImg}
                alt={cartItem.productName}
                width={150}
                height={150}
              />
            </div>
            <div className="flex-grow">
              <h3>{cartItem.productName}</h3>
              <p>{cartItem.productDesc}</p>
              <p>{cartItem.productPrice}</p>
              <p>{cartItem.quantity}</p>
            </div>
            <div className="flex gap-2">
              <Button>
                <Heart />
              </Button>
              <Button
                size={"default"}
                variant={"destructive"}
                onClick={() => {
                  fetch("/api/cart", {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      productId: cartItem.productId,
                    }),
                  }).then((res) => {
                    if (!res.ok) throw new Error("Network response was not ok");
                    queryClient.invalidateQueries({ queryKey: ["cart"] });
                    toast({
                      title: "Успешно",
                      description: "Товар удалён",
                      variant: "destructive",
                    });
                  });
                }}
              >
                <Trash2 />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
