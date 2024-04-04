"use client";
import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Wallet } from "lucide-react";
import {
  useAddToCart,
  useGetCart,
  useRemoveFromCart,
  useUpdateCart,
} from "./use-cart";
import Link from "next/link";

import { useRouter } from "next/navigation";
import CartClearDialog from "./CartClearDialog";
import { Skeleton } from "@/components/skeleton";
import CreateOrderDialog from "../order/CreateOrdeDialog";

export default function CartPage() {
  const { mutate: addToCart } = useAddToCart();
  const { mutate: updateCart } = useUpdateCart();
  const { mutate: removeFromCart } = useRemoveFromCart();
  const { cart, isLoading, isError } = useGetCart();
  const router = useRouter();

  const calculateTotalPrice = () => {
    let total = 0;
    formattedCart.forEach((cartItem) => {
      total += cartItem.productPrice * cartItem.quantity;
    });
    return total;
  };

  if (isLoading)
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl mt-2">Cart</h2>
        <Skeleton className="h-14 w-full" />
        <Skeleton className="h-14 w-full" />
        <Skeleton className="h-14 w-full" />
        <Skeleton className="h-14 w-full" />
      </div>
    );
  if (isError) return <div>Error</div>;
  if (!cart) return <div>Load error</div>;
  const formattedCart = cart.map((cartItem) => {
    return {
      productId: cartItem.productId,
      productName: cartItem.Product.name,
      productDesc: cartItem.Product.desc,
      productPrice: cartItem.Product.price,
      quantity: cartItem.quantity,
      productImg: cartItem.Product.img,
    };
  });
  if (formattedCart.length === 0) {
    return (
      <div className="">
        <h2>Cart is empty</h2>
        <Button
          onClick={() => {
            router.push("/");
          }}
        >
          Start shopping
        </Button>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-2xl mt-2">Cart</h2>
      <div className="flex flex-col gap-4 mt-4">
        {formattedCart.map((cartItem) => (
          <Card
            key={cartItem.productId}
            className="flex gap-8 p-4 items-center"
          >
            <h3>{cartItem.productName}</h3>
            <p>{cartItem.productDesc}</p>
            <p>{cartItem.productPrice}</p>
            <div className="flex items-center gap-2">
              <button
                className="w-8 h-8"
                onClick={() => {
                  addToCart({
                    productId: cartItem.productId,
                    quantity: 1,
                  });
                }}
              >
                +
              </button>
              <p>{cartItem.quantity}</p>
              <button
                className="w-8 h-8"
                onClick={() => {
                  updateCart({
                    productId: cartItem.productId,
                    quantity: cartItem.quantity - 1,
                  });
                }}
              >
                -
              </button>
            </div>
            <Image
              src={cartItem.productImg}
              alt={cartItem.productName}
              width={50}
              height={50}
              className="mr-auto"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw"
            />
            <button
              className="bg-transparent border-none"
              onClick={() => {
                removeFromCart({
                  productId: cartItem.productId,
                });
              }}
            >
              <Trash2 className="transition-transform hover:scale-110" />
            </button>
          </Card>
        ))}
      </div>
      <div className="w-full flex items-center justify-end mt-8 gap-4">
        <CreateOrderDialog />
        <CartClearDialog
          onClear={() => {
            removeFromCart({});
          }}
        >
          <Button variant={"destructive"} className="flex items-center gap-2">
            Clear cart
            <Trash2 />
          </Button>
        </CartClearDialog>

        <h3>Общая сумма: ${calculateTotalPrice()}</h3>
      </div>
      <div className="w-full flex items-center justify-end mt-8 gap-4">
        <CartClearDialog
          onClear={() => {
            removeFromCart({});
          }}
        ></CartClearDialog>
      </div>
    </div>
  );
}
