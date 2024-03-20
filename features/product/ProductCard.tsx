import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@prisma/client";
import { BarChart, Star } from "lucide-react";
import Link from "next/dist/client/link";
import Image from "next/image";
import AddToCart from "./ProductCartWidget";
import "./css/Star.css";
type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card
      className="dark:hover:bg-sky-700 hover:bg-slate-200 transition-transform hover:-translate-y-1  "
      key={product.id}
    >
      <CardHeader className="flex items-center  justify-between">
        <div className="">
          <CardTitle className="text-sm mt-2">
            <Link href={"/product/" + product.id}>{product.name}</Link>
          </CardTitle>
          <CardDescription className="text-xs  mb-2">
            {product.desc}
          </CardDescription>
        </div>
        <div className="flex ml-2 ">
          <div className="flex">
            <Button
              title="Сравнить"
              className="w-12 h-7 bg-blue-400 hover:bg-gray-400 mr-12"
            >
              <BarChart />
            </Button>
          </div>
          <div className="flex">
            <span className="text-xs text-nowrap number mr-1">5 </span>
            <Star className="star-icon mr-1" />
            <Link href={""} className="w-12 h-7  text-xs mr-12 text-nowrap ">
              Отзывы: 1
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Image src={product.img} alt={product.name} width={200} height={400} />
      </CardContent>
      <CardContent>{product.price}$</CardContent>
      <CardFooter className="flex justify-between">
        <AddToCart product={product} />
      </CardFooter>
    </Card>
  );
}
