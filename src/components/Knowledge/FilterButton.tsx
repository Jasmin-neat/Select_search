import React from "react";
import DropDown from "../Icon/DropDown";
interface FilterButtonProps {
  filter: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ filter }) => {
  return (
    <button className="flex items-center gap-1 bg-filter py-3 px-2 font-medium">
      {filter}
      <DropDown />
    </button>
  );
};

export default FilterButton;
