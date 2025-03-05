"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "../ui";

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск....",
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false);
  const list = showAll ? items : defaultItems.slice(0, limit);

  return (
    <div className={cn()}>
      <p className={cn("font-bold mb-3")}>{title}</p>
      {showAll && (
        <div className={cn("mb-5")}>
          <Input
            placeholder={searchInputPlaceholder}
            className={cn("bg-gray-50 border-none")}
          />
        </div>
      )}
      <div
        className={cn(
          "flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar"
        )}
      >
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div
          className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}
        ></div>
      )}
      <button
        onClick={() => setShowAll(!showAll)}
        className={cn("text-primary mt-3")}
      >
        {showAll ? "Скрыть" : "+ Показать все"}
      </button>
    </div>
  );
};
