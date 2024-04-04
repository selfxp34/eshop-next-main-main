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

export default function FavoritesPage() {
  const { mutate: removeFromFavorites } = useRemoveFromFavorites();
  const { favorites, isLoading, isError } = useGetFavorites();
  const router = useRouter();

  // const calculateTotalPrice = () => {
  //   let total = 0;
  //   formattedFav.forEach((cartItem) => {
  //     total += cartItem.productPrice * cartItem.quantity;
  //   });
  //   return total;
  // };

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
  if (!favorites) return <div>Load error</div>;
  const formattedFavorites = favorites.map((favoriteItem) => {
    return {
      productId: favoriteItem.productId,
      productName: favoriteItem.Product.name,
      productDesc: favoriteItem.Product.desc,
      productPrice: favoriteItem.Product.price,
      productImg: favoriteItem.Product.img,
    };
  });
  if (formattedFavorites.length === 0) {
    return (
      <div className="  ">
        <h2>Favorites is empty</h2>
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
        {formattedFavorites.map((favoriteItem) => (
          <Card
            key={favoriteItem.productId}
            className="flex gap-8 p-4 items-center"
          >
            <h3>{favoriteItem.productName}</h3>
            <p>{favoriteItem.productDesc}</p>
            <p>{favoriteItem.productPrice}</p>

            <Image
              src={favoriteItem.productImg}
              alt={favoriteItem.productName}
              width={50}
              height={50}
              className="mr-auto"
            />
            <button
              onClick={() => {
                removeFromFavorites({
                  productId: favoriteItem.productId,
                });
              }}
            >
              <Trash2 className="transition-transform hover:scale-110" />
            </button>
          </Card>
        ))}
      </div>
      <div className="w-full flex items-center justify-end mt-8 gap-4">
        <Button
          onClick={() => {
            // router.push("/");
          }}
          className="flex items-center gap-2"
        >
          Buy
          <Wallet />
        </Button>
        <FavoritesClearDialog
          onClear={() => {
            removeFromFavorites({});
          }}
        >
          <Button variant={"destructive"} className="flex items-center gap-2">
            Clear favorites
            <Trash2 />
          </Button>
        </FavoritesClearDialog>
      </div>
      <div className="w-full flex items-center justify-end mt-8 gap-4">
        <FavoritesClearDialog
          onClear={() => {
            removeFromFavorites({});
          }}
        >
          <Button variant={"destructive"} className="flex items-center gap-2">
            Clear favorites
            <Trash2 />
          </Button>
        </FavoritesClearDialog>
      </div>
    </div>
  );
}
