import React from "react";
import cn from "classnames";
import { Container } from "./container";
import { ArrowUpDown, Divide } from "lucide-react";
import { Title } from "./title";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface FiltersProps {
  className?: string;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className={cn("mb-5 font-bold")} />
      {/*Верхние чекбоксы*/}
      <div className={cn("flex flex-col gap-4")}>
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
      {/*Фильтр цен*/}
      <div className={cn("mt-5 bourder-y border-y-neutral-100 py-6 pb-7")}>
        <p>Цена от и до:</p>
        <div className={cn("flex gap-3 mb-5")}>
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
      <CheckboxFiltersGroup
        title={"Ингридиенты"}
        className={cn("mt-5")}
        limit={6}
        defaultItems={[
          {
            text: "Сырный соуо",
            value: "1",
          },
          {
            text: "Моццарела",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Соленые огурчики",
            value: "4",
          },
          {
            text: "Крсный лук",
            value: "5",
          },
          {
            text: "Томаты",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Сырный соуо",
            value: "1",
          },
          {
            text: "Моццарела",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Соленые огурчики",
            value: "4",
          },
          {
            text: "Крсный лук",
            value: "5",
          },
          {
            text: "Томаты",
            value: "6",
          },
        ]}
      />
    </div>
  );
};
