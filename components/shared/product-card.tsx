import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={cn(className)}>
      <Link href={`/product/${id}`}>
        <div
          className={cn(
            "flex justify-center p-6 bg-secondary rounded-lg h-[260px]"
          )}
        >
          <img
            className={cn("w-[215px] h-[215px]")}
            src={imageUrl}
            alt={name}
          />
        </div>
        <Title text={name} size="sm" className={cn("mb-1 mt-3 font-bold")} />
        <p className={cn("text-sm text-gray-400")}>
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
          альфредо, чеснок
        </p>
        <div className={cn("flex justify-between items-center mt-4")}>
          <span className={cn("text-[20px]")}>
            от <b>{price} руб.</b>
          </span>
          <Button variant="secondary" className={cn("text-based font-bold")}>
            <Plus size={20} className={cn("w-5 h-5 mr-1")} />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
