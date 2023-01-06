import React from "react";
import MenuItems from "./MenuItems";
import { menuItems } from "./menuItemsList";

// TODO: stopped here
// replace MenuItems component with React Modal library component
// style options menu

const OptionsMenu = () => {
  return (
    <div className="more-options">
      {menuItems.map((menuItem, index) => {
        return <MenuItems key={index} {...menuItem} />;
      })}
    </div>
  );
};

export default OptionsMenu;
