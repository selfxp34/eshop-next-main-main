"use client";

import { Product } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

export default function CartPage() {
  const { data: cart, isLoading } = useQuery<{ data: Product[] }>({
    queryKey: ["key"],
    queryFn: () => {
      return fetch("/api/cart").then((res) => res.json());
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (!cart) return <div>Load error</div>;
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ul className="flex flex-col gap-4">
        {cart.data.map((cartItem) => {
          return (
            <li
              key={cartItem.id}
              className="bg-white p-4 shadow rounded-lg flex items-center"
            >
              <div className="mr-4">
                <Image
                  src={cartItem.img}
                  alt={cartItem.name}
                  width={500}
                  height={300}
                  className="w-32 h-32 object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{cartItem.name}</h3>
                <p className="text-gray-500">{cartItem.desc}</p>
              </div>
              <p className="text-gray-500">${cartItem.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
