"use client";
import {
  useAddToCart,
  useGetCart,
  useRemoveFromCart,
  useUpdateCart,
} from "@/features/cart/use-cart";
import { fetchData } from "next-auth/client/_utils";
import React, { useState, useEffect } from "react";

export const dynamic = "force-dynamic";

export default function TotalCartItems() {
  const { cart, isLoading } = useGetCart();
  const [totalItems, setTotalItems] = useState(0);
  const { mutate: addToCart } = useAddToCart();
  const { mutate: updateCart } = useUpdateCart();
  const { mutate: removeFromCart } = useRemoveFromCart();

  useEffect(() => {
    let count = 0;
    if (cart) {
      cart.forEach((item) => {
        count += item.quantity;
      });
      setTotalItems(count);
    }
  }, [cart]);

  const refreshData = () => {};

  return (
    <div>
      <div className="text-xs">{totalItems}</div>

      {/* Кнопка для обновления данных */}
    </div>
  );
}
