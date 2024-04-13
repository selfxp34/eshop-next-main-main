"use client";
import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Wallet } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/skeleton";
import { useGetFavorites, useRemoveFromFavorites } from "./use-favorites";

import FavoritesClearDialog from "./FavoritesClearDialog";
import CreateOrderDialog from "../order/CreateOrdeDialog";

export default function FavoritesPage() {
  const { mutate: removeFromFavorites } = useRemoveFromFavorites();
  const { favorites, isLoading, isError } = useGetFavorites();
  const router = useRouter();

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
  if (!favorites) return <div>Load error</div>;
  const formattedCart = favorites.map((favoriteItem) => {
    return {
      productId: favoriteItem.productId,
      productName: favoriteItem.Product.name,
      productDesc: favoriteItem.Product.desc,
      productPrice: favoriteItem.Product.price,
      productImg: favoriteItem.Product.img,
    };
  });
  if (formattedCart.length === 0) {
    return (
      <div className="">
        <h2>Избранное</h2>
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
      <h2 className="text-2xl mb-5">Избранное</h2>

      <div className="flex flex-col gap-4 mb-4 ">
        {formattedCart.map((favoriteItem) => (
          <Card key={favoriteItem.productId} className="text-sm ">
            <div className="flex items-center gap-2 ml-4">
              <h3>{favoriteItem.productName}</h3>

              <Image
                src={favoriteItem.productImg}
                alt={favoriteItem.productName}
                width={200}
                height={200}
                className="ml-auto"
                sizes="(max-width: 640px) 20vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 50vw, 10vw"
              />
            </div>
            <div className="relative">
              <br></br>
              <p className="ml-4 mb-4">{favoriteItem.productPrice} ₽</p>
              <button
                className="bg-transparent border-none text-xs mt-8 absolute bottom-4 right-2"
                onClick={() => {
                  removeFromFavorites({
                    productId: favoriteItem.productId,
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
        <FavoritesClearDialog
          onClear={() => {
            removeFromFavorites({});
          }}
        >
          <Button variant={"destructive"} className="flex items-center gap-2">
            Очистить
          </Button>
        </FavoritesClearDialog>
      </div>
      <div className="w-full flex items-center justify-end mt-8 gap-4">
        <FavoritesClearDialog
          onClear={() => {
            removeFromFavorites({});
          }}
        ></FavoritesClearDialog>
      </div>
    </div>
  );
}
