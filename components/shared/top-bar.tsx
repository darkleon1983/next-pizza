import React from "react";
import cn from "classnames";
import { Container } from "./container";
import { ArrowUpDown, Divide } from "lucide-react";
import { Title } from "./title";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";

interface TopBarProps {
  className?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white pu-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className={cn("flex items-center justify-between")}>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
