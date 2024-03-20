"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { BarChart, Check, Heart } from "lucide-react";
import React from "react";
import addToCartAction from "./addToCartAction";
import "./css/ButtonCard.css";
import {
  useAddToFavorite,
  useGetFavorites,
  useRemoveFromFavorites,
} from "../favorites/use-favorites";
import { cn } from "@/lib/utils";

type Props = {
  product: Product;
};

export default function AddToCart({ product }: Props) {
  const [showTick, setShowTick] = useState(false);
  const { mutate: removeFromFavorites } = useRemoveFromFavorites();
  const { mutate: addToFavorite } = useAddToFavorite();
  const { favorites, isLoading: favoritesLoading } = useGetFavorites();
  const [cartCount, setCartCount] = useState(0);
  // const [isFavorite, setIsFavorite] = useState(false);

  const isFavorite = Boolean(
    favorites?.find((item) => item.Product.id === product.id)
  );
  const handleButtonClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    await addToCartAction(product.id);
    fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: product.id,
        quantity: 1,
      }),
    });

    setShowTick(true);
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleFavoriteClick = () => {
    if (isFavorite) removeFromFavorites({ productId: product.id });
    else addToFavorite({ productId: product.id });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartCount));
  }, [cartCount]);

  return (
    <>
      <Button
        // className={isFavorite ? "text-red-500" : "hover:text-red-500"}
        title="Добавить в избранное"
        variant="outline"
        size="icon"
        onClick={handleFavoriteClick}
      >
        <Heart
          className={cn({
            "text-red-500": isFavorite,
          })}
        />
      </Button>

      <Button
        className="center-button bg-green-600"
        onClick={handleButtonClick}
      >
        {showTick ? "В корзине" : "Купить"}
      </Button>
      {showTick && <p className="text-xs"> {cartCount}</p>}
    </>
  );
}
