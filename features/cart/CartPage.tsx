"use client";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Cart, cartSchema } from "./cart-schema";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

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

  const handleDeleteItem = (productId: number) => {
    fetch("/api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        queryClient.invalidateQueries({ queryKey: ["cart"] });
        toast({
          title: "Success",
          description: "Item removed from cart",
          variant: "destructive",
        });
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      });
  };

  const handleDeleteCart = () => {
    Promise.all(
      cart.cart.map((cartItem) => {
        return fetch("/api/cart", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: cartItem.ProductCart[0].productId,
          }),
        }).then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
        });
      })
    )
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ["cart"] });
        toast({
          title: "Success",
          description: "Cart deleted",
          variant: "destructive",
        });
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      });
  };

  const formattedCart = cart.cart.map((cartItem) => {
    return {
      productId: cartItem.ProductCart[0].productId,
      productName: cartItem.ProductCart[0].Product.name,
      productDesc: cartItem.ProductCart[0].Product.desc,
      productPrice: cartItem.ProductCart[0].Product.price,
      quantity: cartItem.ProductCart[0].quantity,
      productImg: cartItem.ProductCart[0].Product.img,
    };
  });

  // Вычисление общей суммы товаров в корзине
  const totalAmount = formattedCart.reduce(
    (prev, curr) => prev + curr.productPrice * curr.quantity,
    0
  );

  const totalQuantity = formattedCart.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );

  return (
    <div className="flex">
      <div className="w-3/4">
        <div>
          <h2 className="text-2xl p-3">Корзина</h2>
          <div className="flex flex-col gap-1">
            {formattedCart.map((cartItem) => (
              <Card
                key={cartItem.productId}
                className="flex flex-col md:flex-row gap-2 p-4"
              >
                <div className="flex items-center">
                  <Image
                    src={cartItem.productImg}
                    alt={cartItem.productName}
                    width={170}
                    height={170}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <div>
                    <h3>{cartItem.productName}</h3>
                    <p>{cartItem.productPrice}$</p>
                    <p>{cartItem.quantity}</p>
                  </div>
                  <div className="flex justify-end mt-4 cursor-pointer">
                    <Trash2
                      className="transition-transform duration-500 ease hover:-translate-y-1 hover:scale-110 "
                      onClick={() => handleDeleteItem(cartItem.productId)}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex flex-col p-4">
            <div className="flex justify-between">
              <h2 className="text-sm p-3">Товаров: {totalQuantity}</h2>
              <h2 className="text-sm p-3">Итого: {totalAmount}$</h2>
            </div>
            <div className="flex justify-end mt-4">
              <Button
                size={"default"}
                variant={"destructive"}
                onClick={handleDeleteCart}
              >
                Очистить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
