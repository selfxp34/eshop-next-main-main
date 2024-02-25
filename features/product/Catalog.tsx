import React from "react";
import ProductCard from "./ProductCard";
import { db } from "@/prisma/db";
// import {setTimeout as wait} from 'node:timers/promises' // искуственная задержка, только на сервере

export default async function Catalog() {
  const catalog = await db.product.findMany();
  // await wait(2000)
  return (
    <div>
      <h2 className="font-serif text-4xl text-black dark:text-slate-300 ml-auto p-4">
        Catalog
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {catalog.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
