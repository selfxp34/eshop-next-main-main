"use client";

import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useAddToRating } from "./use-rating";
import { Product } from "@prisma/client";

type Props = {
  product: Product;
};

export default function RatingStars({ product }: Props) {
  const [rating, setRating] = useState<number | null>(product.ratingAverage);
  const [hover, setHover] = useState<number | null>(null);
  const { mutate: addToRating } = useAddToRating();

  return (
    <div className="flex">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              className="hidden"
            />
            <FaStar
              onClick={() => {
                setRating(currentRating);
                addToRating({
                  rating: currentRating,
                  productId: product.id,
                });
              }}
              className={`cursor-pointer text-gray-500 ${getStarSize()}`}
              color={
                currentRating <=
                (hover !== null ? hover : rating !== null ? rating : 0)
                  ? "#ffc107"
                  : "#e4e5e9"
              }
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
              style={{ transition: "color 0.2s ease-in-out" }}
            />
          </label>
        );
      })}
    </div>
  );

  function getStarSize() {
    return "text-[15px] sm:text-[10px] md:text-[15px] lg:text-[15px] xl:text-[18px]";
  }
}
