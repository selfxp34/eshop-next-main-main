// const PrismaClient = require('@prisma/client').PrismaClient
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function start() {
  await db.product.create({
    data: {
      name: "iPhone 15 Pro Max",
      img: "/products/iphone15.jpg",
      desc: " 512Gb синий титан ",
      price: 250990,
    },
  });
  await db.product.create({
    data: {
      name: "Apple iPhone 13",
      img: "/products/iphone13.jpg",
      desc: "128Gb Starlight ",
      price: 1999.95,
    },
  });
  await db.product.create({
    data: {
      name: "Samsung Galaxy S24",
      img: "/products/SamsungGalaxy S2Ultra.jpg",
      desc: "1 ТБ желтый титан",
      price: 189999.95,
    },
  });
  await db.product.create({
    data: {
      name: "Xiaomi 13 Ultra ",
      img: "/products/Xiaomi13Ultra.jpg",
      desc: "12+512 ГБ чёрный",
      price: 109999.95,
    },
  });
  await db.product.create({
    data: {
      name: "iPhone 14 Pro Max ",
      img: "/products/Iphone14.jpg",
      desc: "1 ТБ Dual SIM золотой",
      price: 179999.95,
    },
  });
  await db.product.create({
    data: {
      name: "Infinix Zero Ultra",
      img: "/products/InfinixZero.jpg",
      desc: "256 ГБ чёрный",
      price: 9999.95,
    },
  });
  await db.product.create({
    data: {
      name: "Realme 10 Pro Plus",
      img: "/products/Realme10Pro.jpg",
      desc: "5G 256 ГБ золотой",
      price: 99499.95,
    },
  });
}

start();
