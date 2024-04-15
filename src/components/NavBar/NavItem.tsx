import React from "react";

interface NavItemProps {
  name: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ name, active, onClick }) => {
  const imgPath = `/svg/${name}.svg`;

  const itemClasses = `cursor-pointer ${
    active ? "bg-nav-item" : "bg-transparent"
  }`;

  return (
    <div
      className={`flex w-14 h-14 rounded-xl mb-3 items-center justify-center ${itemClasses}`}
      onClick={onClick}
    >
      <img src={imgPath} alt={name} />
    </div>
  );
};

export default NavItem;
