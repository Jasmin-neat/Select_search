import React, { useState } from "react";
import NavItem from "./NavItem";

const NavBar: React.FC = () => {
  const navItemList = ["Home", "People", "Knowledge", "Chat", "Setting"];
  const [activeItem, setActiveItem] = useState<string>(navItemList[0]);

  const navItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <nav>
      <div className="flex flex-col w-22 h-screen p-4 bg-nav-color">
        {navItemList.map((itemName, index) => (
          <NavItem
            key={index}
            name={itemName}
            active={itemName === activeItem}
            onClick={() => navItemClick(itemName)}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
