import React, { useState } from "react";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navItemList = ["Home", "People", "Knowledge", "Chat", "Setting"];
  const [activeItem, setActiveItem] = useState<string>(navItemList[0]);
  const navigate = useNavigate();

  const navItemClick = (itemName: string) => {
    setActiveItem(itemName);
    navigate(`/${itemName.toLowerCase()}`);
  };

  return (
    <nav className="mr-24">
      <div className="flex flex-col fixed w-22 h-screen p-4 bg-nav">
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
