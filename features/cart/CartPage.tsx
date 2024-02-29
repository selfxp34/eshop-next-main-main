"use client";

import { Product } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

export default function CartPage() {
  const { data: products, isLoading } = useQuery<{ data: Product[] }>({
    queryKey: ["product"],
    queryFn: () => {
      return fetch("/api/product").then((res) => res.json());
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (!products) return <div>Load error</div>;
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
        {products.data.map((product) => {
          return (
            <li
              key={product.id}
              className="dark:hover:bg-sky-700 hover:bg-slate-200 transition-transform hover:-translate-y-1 "
            >
              <div className="mr-4">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={500}
                  height={300}
                  className="w-32 h-32 object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.desc}</p>
              </div>
              <p className="text-gray-500">${product.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
