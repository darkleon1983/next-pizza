import React from "react";
import cn from "classnames";
import { Search } from "lucide-react";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("flex rounded-2xl flex-1 justify-between relative h-11")}
    >
      <Search
        className={cn(
          "absolute top-1/2 translate-y-[50%] left-3 h-5 text-gray-400"
        )}
      />
    </div>
  );
};
