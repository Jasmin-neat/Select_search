import React from "react";

interface SocialItemProps {
  name: string;
}

const SocialItem: React.FC<SocialItemProps> = ({ name }) => {
  const imgPath = `/svg/social/${name}.svg`;
  return (
    <div className="flex flex-col w-full last:mr-0 items-center justify-between">
      <div className="flex w-12 h-12 rounded-3xl items-center justify-center bg-white opacity-90 ">
        <img src={imgPath} alt={name} />
      </div>
      {name !== "more" && (
        <p className="text-xs text-white font-extrabold text-center">{name}</p>
      )}
    </div>
  );
};

export default SocialItem;
