import React from "react";
interface SuggestedItemProps {
  icon: string;
  name: string;
}

const SuggestedItem: React.FC<SuggestedItemProps> = ({ icon, name }) => {
  const imgPath = `/svg/social/${icon}.svg`;

  return (
    <div className="flex w-fit border-2 rounded-lg mb-4 py-2 px-2 items-center">
      <img className="w-6 h-6 mr-2" src={imgPath} alt={icon} />
      <p>{name}</p>
    </div>
  );
};

export default SuggestedItem;
