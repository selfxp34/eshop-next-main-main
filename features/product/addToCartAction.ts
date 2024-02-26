"use server";

import { db } from "@/prisma/db";

export default async function addToCart() {
  await db.product.create({
    data: {
      name: "Apple iPhone 13",
      img: "/products/iphone13.jpg",
      desc: "128Gb Starlight",
      price: 11999.95,
    },
  });
}
