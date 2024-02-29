import React from "react";
import ProductCard from "./ProductCard";
import { db } from "@/prisma/db";

// import {setTimeout as wait} from 'node:timers/promises' // искуственная задержка, только на сервере

export default async function Catalog() {
  const catalog = await db.product.findMany();
  // await wait(2000)
  return (
    <div>
      <h2 className="text-2xl text-black dark:text-slate-300  pt-3 mb-6 flex text-start ">
        Смартфоны в Волгограде
      </h2>
      <h4 className="text-1xl text-black dark:text-slate-300  pt-3 mb-6 flex text-start ">
        Ледеры продаж
      </h4>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ">
        {catalog.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
