// // @ts-check
// // const PrismaClient = require('@prisma/client').PrismaClient
// import { PrismaClient } from "@prisma/client";
// const db = new PrismaClient();

// async function start() {
//   /** @type {import("@prisma/client").Manufacturer | null} */
//   let magnit = await db.manufacturer.findFirst({
//     where: {
//       name: "Магниты",
//     },
//   });
//   let krushka = await db.manufacturer.findFirst({
//     where: {
//       name: "Кружки",
//     },
//   });
//   let tarelka = await db.manufacturer.findFirst({
//     where: {
//       name: "Тарелки",
//     },
//   });
//   let statuetka = await db.manufacturer.findFirst({
//     where: {
//       name: "Статуэтки",
//     },
//   });

//   if (!magnit) {
//     magnit = await db.manufacturer.create({
//       data: {
//         name: "Магниты",
//       },
//     });
//   }
//   if (!krushka) {
//     krushka = await db.manufacturer.create({
//       data: {
//         name: "Кружки",
//       },
//     });
//   }
//   if (!tarelka) {
//     tarelka = await db.manufacturer.create({
//       data: {
//         name: "Тарелки",
//       },
//     });
//   }
//   if (!statuetka) {
//     statuetka = await db.manufacturer.create({
//       data: {
//         name: "Статуэтки",
//       },
//     });
//   }
//   await db.product.create({
//     data: {
//       name: "Магнит металлический  Волгоград, 9 см",
//       img: "/products/mag.png",
//       desc: "Магнит металлический сувенирный Волгоград в виде свитка украсит вашу коллекцию",
//       price: 500,
//       manufacturerId: magnit.id,
//     },
//   });
//   await db.product.create({
//     data: {
//       name: "Магнит Волгоград, подкова, металл",
//       img: "/products/mag2.png",
//       desc: "Металлический магнит с символикой г. Волгограда. 6х6 см",
//       price: 400,
//       manufacturerId: magnit.id,
//     },
//   });
//   await db.product.create({
//     data: {
//       name: "Магнит на холодильник металлический Волгоград",
//       img: "/products/mag3.png",
//       desc: "Коллаж",
//       price: 600,
//       manufacturerId: magnit.id,
//     },
//   });

//   await db.product.create({
//     data: {
//       name: "Тарелка Волгоград-Сталинград",
//       img: "/products/tar.png",
//       desc: "синяя, диаметр 15 см",
//       price: 800,
//       manufacturerId: tarelka.id,
//     },
//   });
//   await db.product.create({
//     data: {
//       name: "Декоративная тарелка, 15 см",
//       img: "/products/tar2.png",
//       desc: "Тарелка сувенирная .Сталин диаметром 15 см",
//       price: 800,
//       manufacturerId: tarelka.id,
//     },
//   });
//   await db.product.create({
//     data: {
//       name: "Тарелка Волгоград-Сталинград зеленая,",
//       img: "/products/tar3.png",
//       desc: "диаметр 15 см",
//       price: 750,
//       manufacturerId: tarelka.id,
//     },
//   });
//   await db.product.create({
//     data: {
//       name: "Кружка сувенирная Волгоград 0.4 л.",
//       img: "/products/kr.png",
//       desc: "Кружка сувенирная эмалированная Волгоград отличное сочетание практичности и стиля.",
//       price: 598,
//       manufacturerId: krushka.id,
//     },
//   });
//   await db.product.create({
//     data: {
//       name: "Декоративная чаша, 7 см",
//       img: "/products/kr2.png",
//       desc: "Кружка из стекла с символикой г.Волгограда. ",
//       price: 677,
//       manufacturerId: krushka.id,
//     },
//   });
//   await db.product.create({
//     data: {
//       name: "Кружка Герб Волгограда, 330 мл",
//       img: "/products/kr3.png",
//       desc: "Рисунок не стирается. Кружку можно мыть в посудомоечной машине.  ",
//       price: 820,
//       manufacturerId: krushka.id,
//     },
//   });
//   await db.product.create({
//     data: {
//       name: "Бронзовая статуэтка Родина-Мать большая",
//       img: "/products/st.png",
//       desc: "Размеры: 10,5х7х20 см. высота подставки 1,5 см, 755 гр. Высота: 20 см.",
//       price: 1720,
//       manufacturerId: statuetka.id,
//     },
//   });
//   await db.product.create({
//     data: {
//       name: "Винтажная статуэтка Вечный огонь",
//       img: "/products/st2.png",
//       desc: "Керамика. СССР, 1970-е.",
//       price: 999,
//       manufacturerId: statuetka.id,
//     },
//   });
//   await db.product.create({
//     data: {
//       name: "Советский воин, 8 см.",
//       img: "/products/st3.png",
//       desc: "Цвет Бронзовый",
//       price: 799,
//       manufacturerId: statuetka.id,
//     },
//   });
// }

// start();
