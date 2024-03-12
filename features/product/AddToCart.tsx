"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { BarChart, Check, Heart } from "lucide-react";
import React from "react";
import addToCartAction from "./addToCartAction";
import "./css/ButtonCard.css";

type Props = {
  product: Product;
};

export default function AddToCart({ product }: Props) {
  const [showTick, setShowTick] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

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
    const updatedIsFavorite = !isFavorite;
    setIsFavorite(updatedIsFavorite);
    localStorage.setItem(
      "favoriteProduct_" + product.id,
      updatedIsFavorite.toString()
    );
  };

  useEffect(() => {
    const favoriteState = localStorage.getItem("favoriteProduct_" + product.id);
    if (favoriteState) {
      setIsFavorite(favoriteState === "true");
    }
  }, [product.id]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartCount));
  }, [cartCount]);

  return (
    <>
      <Button
        className={isFavorite ? "text-red-500" : "hover:text-red-500"}
        title="Добавить в избранное"
        variant="outline"
        size="icon"
        onClick={handleFavoriteClick}
      >
        <Heart />
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
778