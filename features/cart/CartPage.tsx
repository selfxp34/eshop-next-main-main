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
        <h2 className="text-2xl mt-2">Корзина</h2>
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
      totalProductPrice: cartItem.Product.price * cartItem.quantity, // Добавляем общую сумму для каждого товара
    };
  });
  if (formattedCart.length === 0) {
    return (
      <div className="">
        <h2>Корзина товаров</h2>
        <Button
          onClick={() => {
            router.push("/");
          }}
        >
          Вернуться в каталог
        </Button>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-2xl mb-5">Корзина</h2>
      <div className="flex flex-col gap-4 mb-4">
        {formattedCart.map((cartItem) => (
          <Card key={cartItem.productId} className="text-sm">
            <div className="flex items-center gap-2">
              <button
                className="w-8 h-8 text-xs bg-gray-200 rounded-sm text-black"
                onClick={() => {
                  updateCart({
                    productId: cartItem.productId,
                    quantity: cartItem.quantity - 1,
                  });
                }}
              >
                -
              </button>
              <p className="text-xs">{cartItem.quantity}</p>шт.
              <button
                className="w-8 h-8 text-xs bg-gray-200 rounded-sm text-black"
                onClick={() => {
                  addToCart({
                    productId: cartItem.productId,
                    quantity: 1,
                  });
                }}
              >
                +
              </button>
              <h3>{cartItem.productName}</h3>
              <Image
                src={cartItem.productImg}
                alt={cartItem.productName}
                width={200}
                height={200}
                className="ml-auto"
                sizes="(max-width: 640px) 20vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 50vw, 10vw"
              />
            </div>

            <p className="ml-4"> 1 шт:&nbsp;{cartItem.productPrice} ₽</p>
            <p className=" text-xl p-2 ">
              Сумма: {cartItem.totalProductPrice} ₽{" "}
              {/* Выводим общую сумму для каждого товара */}
            </p>
            <div className="relative">
              <button
                className="bg-transparent border-none text-xs mt-8 absolute bottom-4 right-2"
                onClick={() => {
                  removeFromCart({
                    productId: cartItem.productId,
                  });
                }}
              >
                <p className="text-xs font-bold flex justify-start"></p>
                <Trash2 className="transition-transform hover:scale-110 text-xs" />
              </button>
            </div>
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
            Очистить
          </Button>
        </CartClearDialog>

        <h3>Общая сумма: ₽{calculateTotalPrice()}</h3>
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
