import React from "react";
import FilterButton from "./FilterButton";
import FilterBox from "./FilterBox";

const FilterOption: React.FC = () => {
  return (
    <div className="flex gap-10">
      <FilterButton filter="Created by" />
      <FilterButton filter="Department" />
      <FilterBox name={""} />
    </div>
  );
};

export default FilterOption;
