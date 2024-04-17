import React from "react";
import SearchIcon from "../Icon/SearchIcon";

interface FilterBoxProps {
  name: string;
}

const FilterBox: React.FC<FilterBoxProps> = ({ name }) => {
  return (
    <div className="flex items-center border-filter border-2 p-3 gap-2">
      <SearchIcon />
      <input
        type="text"
        placeholder="Filter by name"
        className="text-lg focus:outline-none font-medium"
      />
    </div>
  );
};

export default FilterBox;
