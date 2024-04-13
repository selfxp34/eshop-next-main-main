"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

type ManufacturerDTO = {
  data: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
  }[];
};

type Props = {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
};

export default function FilterManufacturer({
  manufacturer,
  setManufacturer,
}: Props) {
  const { data: manufacturers, isLoading } = useQuery<ManufacturerDTO>({
    queryKey: ["manufacturers"],
    queryFn: async () => {
      const res = await fetch("/api/manufacturer");
      return res.json();
    },
  });
  if (isLoading || !manufacturers) return <Skeleton />;
  return (
    <Select
      onValueChange={(value) => {
        setManufacturer(value);
      }}
      value={manufacturer}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a manufacturer" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="0">Все</SelectItem>
          {manufacturers.data.map((man) => {
            return (
              <SelectItem key={man.id} value={String(man.id)}>
                {man.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
