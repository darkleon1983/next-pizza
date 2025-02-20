import React from "react";
import cn from "classnames";
import { Container } from "./container";
import { ArrowUpDown, Divide } from "lucide-react";
import { Title } from "./title";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";
import { FilterCheckbox } from "./filter-checkbox";

interface FiltersProps {
  className?: string;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className={cn("mb-5 font-bold")} />
      <div className={cn("flex flex-col gap-4")}>
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
    </div>
  );
};
